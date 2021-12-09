export class FullCharacter {
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
    public get proficiency(): string {
        return this._proficiency;
    }
    public set proficiency(value: string) {
        this._proficiency = value;
    }
    public get characterName(): string {
        return this._characterName;
    }
    public set characterName(value: string) {
        this._characterName = value;
    }
    public get spellcasting(): string {
        return this._spellcasting;
    }
    public set spellcasting(value: string) {
        this._spellcasting = value;
    }
    public get saving_throws(): string {
        return this._saving_throws;
    }
    public set saving_throws(value: string) {
        this._saving_throws = value;
    }
    public get class_proficiencies(): string {
        return this._class_proficiencies;
    }
    public set class_proficiencies(value: string) {
        this._class_proficiencies = value;
    }
    public get class_skills(): string {
        return this._class_skills;
    }
    public set class_skills(value: string) {
        this._class_skills = value;
    }
    public get hit_die(): number {
        return this._hit_die;
    }
    public set hit_die(value: number) {
        this._hit_die = value;
    }
    public get char_class(): string {
        return this._char_class;
    }
    public set char_class(value: string) {
        this._char_class = value;
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
    public get player_id(): number {
        return this._player_id;
    }
    public set player_id(value: number) {
        this._player_id = value;
    }

    constructor(
        private _player_id: number,
        private _characterName: string,
        private _level: number,
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
        private _char_class: string,
        private _hit_die: number,
        private _class_skills: string,
        private _class_proficiencies: string,
        private _saving_throws: string,
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