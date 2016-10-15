export /**
 * stress
 */
class Stress {
    Tenor: string;
    public StressLevel: number = 0;

    private _base: number;
    get Base(): number {
        return this._base;
    }
    set Base(base: number) {
        this._base = base;
    }

    private _shock: number;
    get Shock(): number {
        return this._shock;
    }
    set Shock(shock: number) {
        this._shock = shock;
    }

    constructor(tenor: string, shock: number, base: number){
       this.Base = base;
       this.Tenor = tenor;
       this.Shock = shock;
    }

    get TenorValue() : number {
        var tenor = this.Tenor.substring(0, this.Tenor.length-1); 
        var term = this.Tenor.substring(this.Tenor.length-1).toUpperCase();
        switch(term)
        {
            case "Y": return parseInt(tenor) * 12;
            case "M": return parseInt(tenor);
            case "D": return parseInt(tenor) / 30;
        }
    }
}