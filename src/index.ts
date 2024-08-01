import axios, { AxiosRequestConfig } from 'axios';

export class RHapi {
    private readonly baseURL: string;
    private readonly token: string;

    constructor(token: string) {
        this.baseURL = 'https://forum.arzguard.com';
        this.token = token;
    }

    // @ts-ignore
    private async request(method: string, url: string, data?: any): Promise<any> {
        const config: AxiosRequestConfig = {
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
            const response = await axios(config);
            return response.data;
        } catch (error: any) {
            throw new Error(`Error calling ${method} ${url}: ${error.message || error}`);
        }
    }

    // @ts-ignore
    async promoteUser(userId: number, groupId: number): Promise<any> {
        const url = `/api/promote/${userId}/?group=${groupId}`;
        try {
            return this.request('POST', url);
        } catch (error: any) {
            if (error.message.includes('group_not_allowed')) {
                throw new Error('The specified group cannot be assigned.');
            }
            throw error;
        }
    }

    // @ts-ignore
    async demoteUser(userId: number, groupId?: number): Promise<any> {
        const url = groupId ?
            `/api/demote/${userId}/?group=${groupId}` :
            `/api/demote/${userId}`;
        return this.request('POST', url);
    }
}
