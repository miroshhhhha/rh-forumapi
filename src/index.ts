import axios, { AxiosRequestConfig } from 'axios';

export class RHapi {
    private readonly baseURL: string;
    private readonly token: string;

    constructor(token: string) {
        this.baseURL = 'https://forum.robo-hamster.com';
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
            throw new Error(`Error calling ${method} ${url}: ${error}`);
        }
    }

    // @ts-ignore
    async promoteUser(userId: string, groupId: string): Promise<any> {
        const url = `/api/promote/${userId}/?group[0]=${groupId}`;
        return this.request('POST', url);
    }

    // @ts-ignore
    async demoteUser(userId: string, groupId: string): Promise<any> {
        const url = `/api/demote/${userId}/?group[0]=${groupId}`;
        return this.request('POST', url);
    }
}
