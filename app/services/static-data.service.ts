import { Injectable } from '@angular/core';

@Injectable()
export class StaticDataService {

  constructor() { }

    getCountries()
    { 
        return [] = [ "", "US", "Germany", "UK", "Japan" ];
    }

    getMethods()
    { 
        return [] = ["", "Cubic Spline", "Linear", "PCA", "PCA Fit"];
    }

    getTenors()
    { 
        return [] = ["", "1M", "3M", "6M", "1Y", "2Y", "5Y", "10Y", "15Y", "20Y", "25Y", "30Y", "50Y"];
    }
}
