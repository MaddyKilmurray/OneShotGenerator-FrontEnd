export interface ClassDetailInfo {
    name:string,
    hit_die:number,
    proficiency_choices:[{
        from: [{
            name:string
        }]
    }],
    proficiencies:[{
        name:string
    }],
    saving_throws: [{
        name:string
    }],
    spellcasting: {
        spellcasting_ability:{
            name:string
        }
    }
}