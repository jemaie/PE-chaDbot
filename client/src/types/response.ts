export class Response {
    message: string;
    actions: string;

    constructor(data: Response) {
        this.message = data.message;
        this.actions = data.actions;
    }
}