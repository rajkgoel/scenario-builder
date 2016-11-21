import { Component, OnInit } from '@angular/core';
import { Scenario } from '../classes/scenario';
import { Country } from '../classes/country';
import { ScenarioService } from '../services/scenario.service';
import { StaticDataService } from '../services/static-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _scenarioService: ScenarioService, 
                private _staticDataServices: StaticDataService) {
        this.scenario = new Scenario();
    }

    ngOnInit() {

        this.allCountries = this._staticDataServices.getCountries().filter(c => c.length > 0);
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; 
            if(id != undefined && id > 0) {
                this._scenarioService.getScenario(id)
                    .subscribe(scenario => {
                        this.scenario = scenario;
                        this.selectedCountries = [];
                        this.scenario.Countries.forEach(c=>this.selectedCountries.push(c.Name));
                    });
                //this.resetCountriesSelection();
            }
        });
    }

    resetCountriesSelection(){
        this.selectedCountries = new Array<string>();
        this.scenario.Countries.forEach(c => this.onSelectCountry(c.Name));
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