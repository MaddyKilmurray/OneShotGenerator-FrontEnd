export class CharacterDetail {
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
        private _spellcasting: string
    ) {

    }
}