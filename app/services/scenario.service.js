"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
var ScenarioService = (function () {
    function ScenarioService(http) {
        this.http = http;
        this.scenarioUrl = 'http://localhost:52698/api/scenarios';
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
    }
    ScenarioService.prototype.getScenarios1 = function () {
        var resp = this.http.get(this.scenarioUrl)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
        return resp;
    };
    ScenarioService.prototype.saveScenarioPost = function (scenario) {
        var value = JSON.stringify({ scenario: scenario });
        console.log("scenario.service.ts: Posting scenario " + value);
        var resp = this.http
            .post(this.scenarioUrl, JSON.stringify(scenario), { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
        return resp;
    };
    ScenarioService.prototype.saveScenarioPut = function (scenario) {
        var url = this.scenarioUrl + "/" + scenario.Id;
        console.log("scenario.service.ts: Saving scenario " + url);
        var resp = this.http
            .put(url, JSON.stringify(scenario), { headers: this.headers })
            .toPromise()
            .then(function () { return scenario; })
            .catch(this.handleError);
        return resp;
    };
    ScenarioService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ScenarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ScenarioService);
    return ScenarioService;
}());
exports.ScenarioService = ScenarioService;
//# sourceMappingURL=scenario.service.js.map