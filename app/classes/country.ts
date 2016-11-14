import { Curve } from './curve';

export /**
 * country
 */
class Country {
    Id: number;
    Name: string;
    Curves: Curve[];
    ProxyCountry: string;
    Status: string;
    
    constructor(
        ) {
        this.ProxyCountry = "";
        this.Status = "Valid";
    }
}