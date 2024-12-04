import apiClient from './axios'
import { Response } from '../types/response.ts';
import { History } from '../types/history.ts';

export const chatService = {

    async sendMessage(message_history: History[], content: string, detailed: boolean): Promise<Response> {
        return await apiClient.post('/message', {
            history: message_history,
            content: content,
            detailed: detailed
        });
    }
}
