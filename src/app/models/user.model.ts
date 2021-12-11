export class UserModel {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get partyId(): number {
        return this._partyId;
    }
    public set partyId(value: number) {
        this._partyId = value;
    }
    public get isDM(): boolean {
        return this._isDM;
    }
    public set isDM(value: boolean) {
        this._isDM = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    constructor(
        private _id: number,
        private _username: string,
        private _partyId: number,
        private _email: string,
        private _isDM: boolean,
    ){}
}

