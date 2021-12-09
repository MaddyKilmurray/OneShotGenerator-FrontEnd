export class RaceListResponse {

    public get results(): RaceListInfo[] {
        return this._results;
    }

    public set results(value: RaceListInfo[]) {
        this._results = value;
    }

    constructor(private _results: RaceListInfo[]) {

    }
}

interface RaceListInfo {
    index:string
}