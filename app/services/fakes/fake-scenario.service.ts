import { Scenario } from '../../classes/scenario';
import { ScenarioService } from '../../services/scenario.service';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

export class FakeScenarioService //implements ScenarioService 
{

    //private scenarioUrl = '';
    getScenarios1(): Observable<Scenario[]> {
       return this.getDummyScenario();
    }

    saveScenarioPost(scenario: Scenario)
    {
    }

    saveScenarioPut(scenario: Scenario): Promise<Scenario>
    {
        return null;
    }

    getDummyScenario(): Observable<Scenario[]>{
        let scenario1Country1 = { 
          Id:1, Name:"US", ProxyCountry:"", Status:"Ok", 
          Curves:[
                  { 
                    Name: "OIS", Scenario: "China Breakdown", Country: "US", Method: "Cubic Spline", Type:"Absolute",
                    ProxyCurve:"",
                    Stresses: [
                        { Tenor: "1M", Shock: 12, Base: 50, Stress: 62 }, 
                        { Tenor: "6M", Shock: 30, Base: 55, Stress: 85 }, 
                        { Tenor: "2Y", Shock: 20, Base: 60, Stress: 80 }, 
                        { Tenor: "5Y", Shock: 25, Base: 58, Stress: 83}
                      ]
                    },
                    { 
                    Name: "Swap", Scenario: "China Breakdown", Country: "US", Method: "Linear", Type:"Absolute",
                    ProxyCurve:"",
                    Stresses: [
                        { Tenor: "1M", Shock: 15, Base: 50, Stress: 65 }, 
                        { Tenor: "6M", Shock: 20, Base: 55, Stress: 75 }, 
                        { Tenor: "2Y", Shock: 30, Base: 60, Stress: 90 }, 
                        { Tenor: "5Y", Shock: 45, Base: 58, Stress: 93 }
                      ]
                    },
                    {
                    Name: "Govt", Scenario: "China Breakdown", Country: "US", Method: "Linear", Type:"Absolute",
                    ProxyCurve:"",
                    Stresses: [
                        { Tenor: "1M", Shock: 22, Base: 50, Stress: 72 }, 
                        { Tenor: "6M", Shock: 30, Base: 55, Stress: 85 }, 
                        { Tenor: "2Y", Shock: 40, Base: 60, Stress: 100 }, 
                        { Tenor: "5Y", Shock: 55, Base: 58, Stress: 113 }
                      ]
                    }
        ]};

        let scenario1Country2 = { 
            Id:1, Name:"UK", ProxyCountry:"", Status:"Ok", 
            Curves:[
                        { 
                        Name: "BEI", Scenario: "China Breakdown", Country: "UK", Method: "Cubic Spline", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 52, Base: 50, Stress: 102 }, 
                            { Tenor: "6M", Shock: 40, Base: 55, Stress: 95 }, 
                            { Tenor: "2Y", Shock: 30, Base: 60, Stress: 90 }, 
                            { Tenor: "5Y", Shock: 25, Base: 58, Stress: 83 }
                        ]
                        },
                        { 
                        Name: "Swap", Scenario: "China Breakdown", Country: "UK", Method: "Linear", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 12, Base: 50, Stress: 62 }, 
                            { Tenor: "6M", Shock: 20, Base: 55, Stress: 75 }, 
                            { Tenor: "2Y", Shock: 30, Base: 60, Stress: 90 }, 
                            { Tenor: "5Y", Shock: 45, Base: 58, Stress: 103 }
                        ]
                        },
                        { 
                        Name: "Govt", Scenario: "China Breakdown", Country: "UK", Method: "Linear", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 32, Base: 50, Stress: 82 }, 
                            { Tenor: "6M", Shock: 20, Base: 55, Stress: 75 }, 
                            { Tenor: "2Y", Shock: 10, Base: 60, Stress: 70 }, 
                            { Tenor: "5Y", Shock: 45, Base: 58, Stress: 103 }
                        ]
                        }
            ]};

        let scenario2Country1 = { 
            Id:1, Name:"Japan", ProxyCountry:"", Status:"Ok", 
            Curves:[
                    { 
                        Name: "OIS", Scenario: "China Breakdown", Country: "US", Method: "Cubic Spline", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 32, Base: 50, Stress: 82 }, 
                            { Tenor: "6M", Shock: 20, Base: 55, Stress: 75 }, 
                            { Tenor: "2Y", Shock: 10, Base: 60, Stress: 70 }, 
                            { Tenor: "5Y", Shock: 45, Base: 58, Stress: 103 }
                        ]
                        },
                        { 
                        Name: "BEI", Scenario: "China Breakdown", Country: "US", Method: "Linear", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 32, Base: 50, Stress: 82 }, 
                            { Tenor: "6M", Shock: 30, Base: 55, Stress: 85 }, 
                            { Tenor: "2Y", Shock: 10, Base: 60, Stress: 70 }, 
                            { Tenor: "5Y", Shock: 45, Base: 58, Stress: 103 }
                        ]
                        }
            ]};

        let scenario2Country2 = { 
            Id:1, Name:"Germany", ProxyCountry:"", Status:"Ok", 
            Curves:[
                        { 
                        Name: "OIS", Scenario: "China Breakdown", Country: "UK", Method: "Cubic Spline", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 22, Base: 50, Stress: 72 }, 
                            { Tenor: "6M", Shock: 30, Base: 55, Stress: 85 }, 
                            { Tenor: "2Y", Shock: 40, Base: 60, Stress: 100 }, 
                            { Tenor: "5Y", Shock: 15, Base: 58, Stress: 73 }
                        ]
                        },
                        { 
                        Name: "GOVT", Scenario: "China Breakdown", Country: "UK", Method: "Linear", Type:"Absolute",
                        ProxyCurve:"",
                        Stresses: [
                            { Tenor: "1M", Shock: 10, Base: 50, Stress: 60 }, 
                            { Tenor: "6M", Shock: 30, Base: 55, Stress: 85 }, 
                            { Tenor: "2Y", Shock: 40, Base: 60, Stress: 100 }, 
                            { Tenor: "5Y", Shock: 15, Base: 58, Stress: 73 }
                        ]
                        }
                ]
            };

        let scenarios = [
            {Id:1, Name:"China Breakdown", Countries:[scenario1Country1, scenario1Country2]}, 
            {Id:2, Name:"Middleeast Collapse", Countries:[scenario2Country1, scenario2Country2]}
        ];

        let scenarios1 : Scenario[];
        var scenario1 : Scenario = <Scenario> {Id:1, Name:"China Breakdown"};
        var scenario2 : Scenario = <Scenario> {Id:2, Name:"Middleeast Collapse"};
        scenarios1 = [];
        scenarios1.push(scenario1);

        return Observable.of(scenarios1);
    }

}