import { Component, OnInit } from '@angular/core';
import { Scenario } from '../classes/scenario';
import { Country } from '../classes/country';
import { Curve } from '../classes/curve';
import { ScenarioService } from '../services/scenario.service';
import { StaticDataService } from '../services/static-data.service';
import { ScenarioEditor } from '../model/scenario-editor';
import { NgClass } from '@angular/common';
import { Chart } from '../classes/chart';

declare var d3: any;
import { Observable }     from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'scenarioeditor',
  templateUrl: 'scenario-editor.component.html',
  styleUrls: ['scenario-editor.component.css']
})
export class ScenarioEditorComponent implements OnInit {
  scenarios: Scenario[] = [];
  model: ScenarioEditor;
  allCountries: string[];
  methods: string[];
  tenors: string[];
  errorMessage: string;

  constructor(private _scenarioService: ScenarioService, 
              private _staticDataServices: StaticDataService) {}

  ngOnInit() {
    this.getDataFromServer();
    this.model = new ScenarioEditor();
  }

  getDataFromServer()
  {
    this._scenarioService.getScenarios1()
                     .subscribe(
                       scenarios => this.scenarios = scenarios,
                       error =>  this.errorMessage = <any>error);

    //this.scenarios = this._scenarioService.getScenarios();
    console.log('Scenarios: ' + this.scenarios.length);
    console.log('Error Message: ' + this.errorMessage);

    this.allCountries = this._staticDataServices.getCountries();
    this.methods = this._staticDataServices.getMethods();
    this.tenors = this._staticDataServices.getTenors();
  }

  setSelectedScenario(scenario: Scenario)
  {
      this.model.SelectedScenario = scenario;
  }

  setSelectedCountry(country: Country)
  {
      this.model.SelectedCountry = country;
  }

  setSelectedCurve(curve: Curve)
  {
      this.model.SelectedCurve = curve;
  }

  generateChartUsingC3(chartArea: any)
    {
        console.log('making chart');
        var chart = new Chart();
        var index : number = 1;
        var shock: (string | number)[] = [],
            stress: (string | number)[] = [],
            base: (string | number)[] = [],
            xAxis: string[];
        
        console.log('making chart1');
        this.model.SelectedCountry.Curves.forEach(curve => {
             
            shock = []; stress = []; base = []; xAxis = [];
            shock.push('Shocks');
            stress.push('Stress');
            base.push('Base');
            xAxis.push('x');
            
            curve.Stresses.forEach(element => {
                console.log(element.Shock + "," + element.StressLevel + "," + element.Base + "," + element.Tenor)
                shock.push(element.Shock);
                stress.push(element.StressLevel);
                base.push(element.Base);
                xAxis.push(element.Tenor);
            });
            console.log('data pushed for chart');
            document.getElementById('chartLabel' + index).innerHTML = curve.Name;
            chart.drawLinear([xAxis, shock, stress, base], '#chart' + index, this.getChartType(curve.Method));
            
            index++;
        });
        
    }

    getChartType(method: string) : string {
        switch(method)
        {
            case 'Cubic Spline': return 'spline';
            default: return '';
        }
    }

    generateChartUsingC3_1(chartArea: any, curve: Curve)
    {
        console.log('making chart');
        var chart = new Chart();
        var shock: (string | number)[] = [],
            stress: (string | number)[] = [],
            base: (string | number)[] = [],
            xAxis: string[];
        
        console.log('making chart1');
            
        shock = []; stress = []; base = []; xAxis = [];
        shock.push('Shocks');
        stress.push('Stress');
        base.push('Base');
        xAxis.push('x');
        
        curve.Stresses.forEach(element => {
            shock.push(element.Shock);
            stress.push(element.StressLevel);
            base.push(element.Base);
            xAxis.push(element.Tenor);
        });

        chart.drawLinear([xAxis, shock, stress, base], chartArea, this.getChartType(curve.Method));
    }

    saveScenario()
    {
        if(this.model.SelectedScenario != null)
        {
            console.log("Saving Scenario" + this.model.SelectedScenario.Name);
            this._scenarioService.saveScenarioPut(this.model.SelectedScenario);
        }
    }

  
  get diagnostic() { 
    if(this.model==null || this.model.SelectedCurve==null)
      return 'Nothing';
    else
      return JSON.stringify(this.model.SelectedCurve); 
    }

}
