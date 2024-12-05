export class Response {
    message: string;
    actions: string[];
    agent: string;

    constructor(data: Response) {
        this.message = data.message;
        this.actions = data.actions;
        this.agent = data.agent;
    }
}