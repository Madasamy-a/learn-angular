export class Employee {
    public id: number;
    public name: string;
    public status: string;

    constructor(idArg: number, nameArg: string, statusArg: string)
    {
        this.id = idArg;
        this.name = nameArg;
        this.status = statusArg;
    }
}