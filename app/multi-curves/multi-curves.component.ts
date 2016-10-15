import { Component, OnInit } from '@angular/core';
import { Chart } from '../classes/chart';
import { Scenario } from '../classes/scenario';
import { ScenarioService } from '../services/scenario.service';

@Component({
  moduleId: module.id,
  selector: 'multicurves',
  templateUrl: 'multi-curves.component.html',
  styleUrls: ['multi-curves.component.css']
})
export class MultiCurvesComponent implements OnInit {

  scenario: Scenario;
  scenarios: Scenario[] = [];
  errorMessage: string;
  
  constructor(private _scenarioService: ScenarioService) { }

  ngOnInit() {
     this._scenarioService.getScenarios1()
                     .subscribe(
                       scenarios => this.scenarios = scenarios,
                       error =>  this.errorMessage = <any>error);
        
    console.log('Scenarios: ' + this.scenarios.length);
    console.log('Error Message: ' + this.errorMessage);
  }

  generateChartUsingC3()
  {
      console.log('making chart');
      var chart = new Chart();
      var x: number = 1,
          y: number = 1;
      var shock: (string | number)[] = [],
          stress: (string | number)[] = [],
          base: (string | number)[] = [],
          xAxis: string[];
      
      this.scenario.Countries.forEach(country => {
          country.Curves.forEach(curve => {
            shock = []; stress = []; base = []; xAxis = [];
            shock.push('Shocks');
            stress.push('Stress');
            base.push('Base');
            xAxis.push('x');
            
            curve.Stresses.forEach(element => {
                shock.push(element.Shock);
                stress.push(element.StressLevel );
                base.push(element.Base);
                xAxis.push(element.Tenor);
            });
            
            chart.drawLinear([xAxis, shock, stress, base], '#chart' + country.Name + curve.Name, this.getChartType(curve.Method));
          
          y++;
          })
          x++;
      });
      
  }

  getChartType(method: string) : string {
      switch(method)
      {
          case 'Cubic Spline': return 'spline';
          default: return '';
      }
  }

}
