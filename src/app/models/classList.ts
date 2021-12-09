export class ClassListResponse {
    public get results(): ClassListInfo[] {
        return this._results;
    }
    public set results(value: ClassListInfo[]) {
        this._results = value;
    }

    constructor(private _results: ClassListInfo[]) {

    }
}

interface ClassListInfo {
    index:string
}