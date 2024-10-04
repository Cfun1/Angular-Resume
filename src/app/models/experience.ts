import { IExperience } from "./experience.interface";

export class Experience implements IExperience {
    constructor(public role: string, public period: string, public company: string, public content: string) {}
}