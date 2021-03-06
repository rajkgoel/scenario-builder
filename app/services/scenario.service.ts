import { Injectable } from '@angular/core';
import { Scenario } from '../classes/scenario';
import { Country } from '../classes/country';
import { Curve } from '../classes/curve';
import { Stress } from '../classes/stress';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScenarioService {

    private scenarioUrl : string;  // URL to web api
    private headers: Headers;
    
    constructor(private http: Http) {
        this.scenarioUrl = 'http://localhost:52698/api/scenarios';
        this.headers = new Headers({'Content-Type': 'application/json'});
     }

    getScenario(id: number): Observable<Scenario> {
       const url = `${this.scenarioUrl}/${id}`;
       var resp = this.http.get(url)
                    .map((resp: Response) => resp.json())
                    .catch(this.handleError);
       return resp;
    }

    getScenarios(): Observable<Scenario[]> {
       var resp = this.http.get(this.scenarioUrl)
                    .map((resp: Response) => resp.json())
                    .catch(this.handleError);
       return resp;
    }

    saveScenarioPost(scenario: Scenario): Observable<Scenario>
    {
        let value = JSON.stringify({scenario: scenario});
        console.log("scenario.service.ts: Posting scenario " + value);
        
        var resp = this.http
                    .post(this.scenarioUrl, JSON.stringify(scenario), {headers: this.headers})
                    .map((resp: Response) => resp.json())
                    .catch(this.handleError);
        return resp;
    }

    saveScenarioPut(scenario: Scenario): Promise<Scenario>
    {
        const url = `${this.scenarioUrl}/${scenario.Id}`;
        
        console.log("scenario.service.ts: Saving scenario " + url);
        var resp = this.http
                    .put(url, JSON.stringify(scenario), {headers: this.headers})
                    .toPromise()
                    .then(() => scenario)
                    .catch(this.handleError);
        return resp;
    }

    deleteScenario(scenario: Scenario){
       const url = `${this.scenarioUrl}/${scenario.Id}`;
       console.log(url);
       var resp = this.http.delete(url).subscribe((res) => { });
        console.log(resp);
       return resp;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}




