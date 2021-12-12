export class FullCharacterWithUser {
    public get playerUsername(): string {
        return this._playerUsername;
    }
    public set playerUsername(value: string) {
        this._playerUsername = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get hitPoints(): number {
        return this._hitPoints;
    }
    public set hitPoints(value: number) {
        this._hitPoints = value;
    }
    public get partyId(): number {
        return this._partyId;
    }
    public set partyId(value: number) {
        this._partyId = value;
    }
    public get charismaModifier(): number {
        return this._charismaModifier;
    }
    public set charismaModifier(value: number) {
        this._charismaModifier = value;
    }
    public get wisdomModifier(): number {
        return this._wisdomModifier;
    }
    public set wisdomModifier(value: number) {
        this._wisdomModifier = value;
    }
    public get intelligenceModifier(): number {
        return this._intelligenceModifier;
    }
    public set intelligenceModifier(value: number) {
        this._intelligenceModifier = value;
    }
    public get constitutionModifier(): number {
        return this._constitutionModifier;
    }
    public set constitutionModifier(value: number) {
        this._constitutionModifier = value;
    }
    public get dexterityModifier(): number {
        return this._dexterityModifier;
    }
    public set dexterityModifier(value: number) {
        this._dexterityModifier = value;
    }
    public get strengthModifier(): number {
        return this._strengthModifier;
    }
    public set strengthModifier(value: number) {
        this._strengthModifier = value;
    }
    public get armourClass(): number {
        return this._armourClass;
    }
    public set armourClass(value: number) {
        this._armourClass = value;
    }
    public get charisma(): number {
        return this._charisma;
    }
    public set charisma(value: number) {
        this._charisma = value;
    }
    public get wisdom(): number {
        return this._wisdom;
    }
    public set wisdom(value: number) {
        this._wisdom = value;
    }
    public get intelligence(): number {
        return this._intelligence;
    }
    public set intelligence(value: number) {
        this._intelligence = value;
    }
    public get constitution(): number {
        return this._constitution;
    }
    public set constitution(value: number) {
        this._constitution = value;
    }
    public get dexterity(): number {
        return this._dexterity;
    }
    public set dexterity(value: number) {
        this._dexterity = value;
    }
    public get strength(): number {
        return this._strength;
    }
    public set strength(value: number) {
        this._strength = value;
    }
    public get spellcasting(): string {
        return this._spellcasting;
    }
    public set spellcasting(value: string) {
        this._spellcasting = value;
    }
    public get savingThrows(): string {
        return this._savingThrows;
    }
    public set savingThrows(value: string) {
        this._savingThrows = value;
    }
    public get classProficiencies(): string {
        return this._classProficiencies;
    }
    public set classProficiencies(value: string) {
        this._classProficiencies = value;
    }
    public get classSkills(): string {
        return this._classSkills;
    }
    public set classSkills(value: string) {
        this._classSkills = value;
    }
    public get hitDie(): number {
        return this._hitDie;
    }
    public set hitDie(value: number) {
        this._hitDie = value;
    }
    public get charClass(): string {
        return this._charClass;
    }
    public set charClass(value: string) {
        this._charClass = value;
    }
    public get traits(): string {
        return this._traits;
    }
    public set traits(value: string) {
        this._traits = value;
    }
    public get languages(): string {
        return this._languages;
    }
    public set languages(value: string) {
        this._languages = value;
    }
    public get proficiency(): string {
        return this._proficiency;
    }
    public set proficiency(value: string) {
        this._proficiency = value;
    }
    public get weaponProficiencies(): string {
        return this._weaponProficiencies;
    }
    public set weaponProficiencies(value: string) {
        this._weaponProficiencies = value;
    }
    public get size(): string {
        return this._size;
    }
    public set size(value: string) {
        this._size = value;
    }
    public get abilityBonus(): number {
        return this._abilityBonus;
    }
    public set abilityBonus(value: number) {
        this._abilityBonus = value;
    }
    public get abilityScore(): string {
        return this._abilityScore;
    }
    public set abilityScore(value: string) {
        this._abilityScore = value;
    }
    public get speed(): number {
        return this._speed;
    }
    public set speed(value: number) {
        this._speed = value;
    }
    public get race(): string {
        return this._race;
    }
    public set race(value: string) {
        this._race = value;
    }
    public get numberOfHitDice(): number {
        return this._numberOfHitDice;
    }
    public set numberOfHitDice(value: number) {
        this._numberOfHitDice = value;
    }
    public get startingTrinket(): string {
        return this._startingTrinket;
    }
    public set startingTrinket(value: string) {
        this._startingTrinket = value;
    }
    public get startingGear(): string {
        return this._startingGear;
    }
    public set startingGear(value: string) {
        this._startingGear = value;
    }
    public get startingArmour(): string {
        return this._startingArmour;
    }
    public set startingArmour(value: string) {
        this._startingArmour = value;
    }
    public get startingWeapon(): string {
        return this._startingWeapon;
    }
    public set startingWeapon(value: string) {
        this._startingWeapon = value;
    }
    public get alignment(): string {
        return this._alignment;
    }
    public set alignment(value: string) {
        this._alignment = value;
    }
    public get experience(): number {
        return this._experience;
    }
    public set experience(value: number) {
        this._experience = value;
    }
    public get level(): number {
        return this._level;
    }
    public set level(value: number) {
        this._level = value;
    }
    public get characterName(): string {
        return this._characterName;
    }
    public set characterName(value: string) {
        this._characterName = value;
    }
    public get playerId(): number {
        return this._playerId;
    }
    public set playerId(value: number) {
        this._playerId = value;
    }
    

    constructor(
        private _id: number,
        private _playerId: number,
        private _playerUsername: string,
        private _characterName: string,
        private _level: number,
        private _partyId: number,
        private _experience: number,
        private _alignment: string,
        private _startingWeapon: string,
        private _startingArmour: string,
        private _startingGear: string,
        private _startingTrinket: string,
        private _numberOfHitDice: number,
        private _race: string,
        private _speed: number,
        private _abilityScore: string,
        private _abilityBonus: number,
        private _size: string,
        private _weaponProficiencies: string,
        private _proficiency: string,
        private _languages: string,
        private _traits: string,
        private _charClass: string,
        private _hitDie: number,
        private _hitPoints: number,
        private _classSkills: string,
        private _classProficiencies: string,
        private _savingThrows: string,
        private _spellcasting: string,
        private _strength: number,
        private _dexterity: number,
        private _constitution: number,
        private _intelligence: number,
        private _wisdom: number,
        private _charisma: number,
        private _armourClass: number,
        private _strengthModifier: number,
        private _dexterityModifier: number,
        private _constitutionModifier: number,
        private _intelligenceModifier: number,
        private _wisdomModifier: number,
        private _charismaModifier: number
    ) {

    }

}