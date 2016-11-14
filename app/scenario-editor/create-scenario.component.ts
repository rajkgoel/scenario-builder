import { Component, OnInit } from '@angular/core';

import { Scenario } from '../classes/scenario';
import { Country } from '../classes/country';

import { ScenarioService } from '../services/scenario.service';
import { StaticDataService } from '../services/static-data.service';

@Component({
  moduleId: module.id,
  selector: 'createscenario',
  templateUrl: 'create-scenario.component.html',
  styleUrls: ['create-scenario.component.css']
})
export class CreateScenarioComponent implements OnInit {

    scenario: Scenario;
    allCountries: string[];
    selectedCountries: string[] = [];
    errorMessage: any;
    submitted = false;
    anyCountriesSelected = true;

    constructor(private _scenarioService: ScenarioService, 
                private _staticDataServices: StaticDataService) {}

    ngOnInit() {
        this.scenario = new Scenario();
        this.allCountries = this._staticDataServices.getCountries().filter(c => c.length > 0);
    }

    onSubmit() { this.submitted = true; }

    onSelectCountry(country: string)    {
        if(this.selectedCountries == null)
            this.selectedCountries = new Array<string>();
        
            let index = this.selectedCountries.findIndex(c => c==country);
            if(index == undefined || index < 0)
                this.selectedCountries.push(country);
            else
                this.selectedCountries[index] = null;

            this.anyCountriesSelected = this.selectedCountries.length <=0 || 
                                        this.selectedCountries.some(c=> c != null);
    }

    isSelected(country: string) : boolean {
        if(this.selectedCountries == null) return false;
        let index = this.selectedCountries.findIndex(c => c==country);
        if(index != undefined && index >= 0)
            return true;
        return false;
    }

    saveScenario()    {
        if(this.selectedCountries.length <=0 || 
           this.selectedCountries.every(c=> c == null || c.trim().length==0))
           {
               this.anyCountriesSelected = false;
               return;
           }

        let countries = this.selectedCountries.filter(c => c != null && c != undefined);
        countries.forEach(country => {
            if(this.scenario.Countries.findIndex(c=>c.Name==country)==-1)
            {
                var cntry = new Country();
                cntry.Name = country;
                this.scenario.Countries.push(cntry);
            }
        });
        
        this._scenarioService.saveScenarioPost(this.scenario)
            .subscribe(scen => this.scenario = scen,
                       error =>  this.errorMessage = <any>error);
        this.submitted = true;
    }

    resetScenario() {
        this.scenario.Name = "";
        this.selectedCountries = new Array<string>();
        this.submitted = false;
    }
}