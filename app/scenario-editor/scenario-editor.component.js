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
var scenario_service_1 = require('../services/scenario.service');
var static_data_service_1 = require('../services/static-data.service');
var scenario_editor_1 = require('../model/scenario-editor');
var chart_1 = require('../classes/chart');
var ScenarioEditorComponent = (function () {
    function ScenarioEditorComponent(_scenarioService, _staticDataServices) {
        this._scenarioService = _scenarioService;
        this._staticDataServices = _staticDataServices;
        this.scenarios = [];
    }
    ScenarioEditorComponent.prototype.ngOnInit = function () {
        this.getDataFromServer();
        this.model = new scenario_editor_1.ScenarioEditor();
    };
    ScenarioEditorComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._scenarioService.getScenarios1()
            .subscribe(function (scenarios) { return _this.scenarios = scenarios; }, function (error) { return _this.errorMessage = error; });
        this.allCountries = this._staticDataServices.getCountries();
        this.methods = this._staticDataServices.getMethods();
        this.tenors = this._staticDataServices.getTenors();
    };
    ScenarioEditorComponent.prototype.setSelectedScenario = function (scenario) {
        this.model.SelectedScenario = scenario;
    };
    ScenarioEditorComponent.prototype.setSelectedCountry = function (country) {
        this.model.SelectedCountry = country;
    };
    ScenarioEditorComponent.prototype.setSelectedCurve = function (curve) {
        this.model.SelectedCurve = curve;
    };
    ScenarioEditorComponent.prototype.generateChartUsingC3 = function (chartArea) {
        var _this = this;
        console.log('making chart');
        var chart = new chart_1.Chart();
        var index = 1;
        var shock = [], stress = [], base = [], xAxis;
        console.log('making chart1');
        this.model.SelectedCountry.Curves.forEach(function (curve) {
            shock = [];
            stress = [];
            base = [];
            xAxis = [];
            shock.push('Shocks');
            stress.push('Stress');
            base.push('Base');
            xAxis.push('x');
            curve.Stresses.forEach(function (element) {
                console.log(element.Shock + "," + element.StressLevel + "," + element.Base + "," + element.Tenor);
                shock.push(element.Shock);
                stress.push(element.StressLevel);
                base.push(element.Base);
                xAxis.push(element.Tenor);
            });
            console.log('data pushed for chart');
            document.getElementById('chartLabel' + index).innerHTML = curve.Name;
            chart.drawLinear([xAxis, shock, stress, base], '#chart' + index, _this.getChartType(curve.Method));
            index++;
        });
    };
    ScenarioEditorComponent.prototype.getChartType = function (method) {
        switch (method) {
            case 'Cubic Spline': return 'spline';
            default: return '';
        }
    };
    ScenarioEditorComponent.prototype.generateChartUsingC3_1 = function (chartArea, curve) {
        console.log('making chart');
        var chart = new chart_1.Chart();
        var shock = [], stress = [], base = [], xAxis;
        console.log('making chart1');
        shock = [];
        stress = [];
        base = [];
        xAxis = [];
        shock.push('Shocks');
        stress.push('Stress');
        base.push('Base');
        xAxis.push('x');
        curve.Stresses.forEach(function (element) {
            shock.push(element.Shock);
            stress.push(element.StressLevel);
            base.push(element.Base);
            xAxis.push(element.Tenor);
        });
        chart.drawLinear([xAxis, shock, stress, base], chartArea, this.getChartType(curve.Method));
    };
    ScenarioEditorComponent.prototype.saveScenario = function () {
        if (this.model.SelectedScenario != null) {
            console.log("Saving Scenario" + this.model.SelectedScenario.Name);
            this._scenarioService.saveScenarioPut(this.model.SelectedScenario);
        }
    };
    Object.defineProperty(ScenarioEditorComponent.prototype, "diagnostic", {
        get: function () {
            if (this.model == null || this.model.SelectedCurve == null)
                return 'Nothing';
            else
                return JSON.stringify(this.model.SelectedCurve);
        },
        enumerable: true,
        configurable: true
    });
    ScenarioEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'scenarioeditor',
            templateUrl: 'scenario-editor.component.html',
            styleUrls: ['scenario-editor.component.css']
        }), 
        __metadata('design:paramtypes', [scenario_service_1.ScenarioService, static_data_service_1.StaticDataService])
    ], ScenarioEditorComponent);
    return ScenarioEditorComponent;
}());
exports.ScenarioEditorComponent = ScenarioEditorComponent;
//# sourceMappingURL=scenario-editor.component.js.map