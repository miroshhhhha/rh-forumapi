"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHapi = void 0;
const axios_1 = __importDefault(require("axios"));
class RHapi {
    constructor(token) {
        this.baseURL = 'https://forum.arzguard.com';
        this.token = token;
    }
    // @ts-ignore
    request(method, url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                method: method,
                url: url,
                baseURL: this.baseURL,
                headers: {
                    'XF-Api-Key': this.token,
                    'Content-Type': 'application/json'
                },
                data: data
            };
            try {
                const response = yield (0, axios_1.default)(config);
                return response.data;
            }
            catch (error) {
                throw new Error(`Error calling ${method} ${url}: ${error.message || error}`);
            }
        });
    }
    // @ts-ignore
    promoteUser(userId, groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/api/promote/${userId}/?group=${groupId}`;
            try {
                return this.request('POST', url);
            }
            catch (error) {
                if (error.message.includes('group_not_allowed')) {
                    throw new Error('The specified group cannot be assigned.');
                }
                throw error;
            }
        });
    }
    // @ts-ignore
    demoteUser(userId, groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = groupId ?
                `/api/demote/${userId}/?group=${groupId}` :
                `/api/demote/${userId}`;
            return this.request('POST', url);
        });
    }
}
exports.RHapi = RHapi;
