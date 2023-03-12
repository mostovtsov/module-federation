export class Forecast {
    date: Date | undefined;
    temperatureC: number | undefined;
    summary: string | undefined;
    constructor(date: Date | undefined,  temperatureC: number | undefined, summary: string | undefined) { 
        this.date = date;
        this.temperatureC = temperatureC;
        this.summary = summary;
    }
}