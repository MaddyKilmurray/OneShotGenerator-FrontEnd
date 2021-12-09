
export class RaceDetailResponse {
    public get results(): RaceDetailInfo[] {
        return this._results;
    }

    public set results(value: RaceDetailInfo[]) {
        this._results = value;
    }

    constructor(private _results: RaceDetailInfo[]) {

    }
}

export interface RaceDetailInfo {
    name:string,
    speed:number,
    abilityScore:string,
    ability_bonuses:[{
        ability_score: {
            name:string
        },
        bonus:number
    }],
    size:string,
    starting_proficiencies:[{
        name:string
    }],
    languages:[{
        name:string
    }],
    traits:[{
        name:string
    }]
}