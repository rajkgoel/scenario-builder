import { Curve } from './curve';

export /**
 * country
 */
class Country {
    ProxyCountry: string;
    Status: string;
    Id: number;
    Name: string;
    Curves: Curve[];
    constructor(
        ) {
        this.ProxyCountry = "";
        this.Status = "Valid";
    }
}