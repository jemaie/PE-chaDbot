export class History {
    role: string;
    content: string;

    constructor(data: History) {
        this.role = data.role;
        this.content = data.content;
    }
}