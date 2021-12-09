
export class FullCharacterResponse {
    public get results(): FullCharacterInfo[] {
        return this._results;
    }

    public set results(value: FullCharacterInfo[]) {
        this._results = value;
    }

    constructor(private _results: FullCharacterInfo[]) {

    }
}

export interface FullCharacterInfo {
        id: number,
        playerId: number,
        characterName: string,
        level: number,
        experience: number,
        alignment: string,
        startingWeapon: string,
        startingArmour: string,
        startingGear: string,
        startingTrinket: string,
        numberOfHitDice: number,
        race: string,
        speed: number,
        abilityScore: string,
        abilityBonus: number,
        size: string,
        proficiency: string,
        weaponProficiencies: string,
        languages: string,
        traits: string,
        charClass: string,
        hitDice: number,
        hitPoints: number,
        classSkills: string,
        classProficiencies: string,
        savingThrows: string,
        spellcasting:string,
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        armourClass: number,
        strengthModifier: number,
        dexterityModifier: number,
        constitutionModifier: number,
        intelligenceModifier: number,
        wisdomModifier: number,
        charismaModifier: number
}