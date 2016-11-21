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
var chart_1 = require('../classes/chart');
var scenario_service_1 = require('../services/scenario.service');
var MultiCurvesComponent = (function () {
    function MultiCurvesComponent(_scenarioService) {
        this._scenarioService = _scenarioService;
        this.scenarios = [];
    }
    MultiCurvesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scenarioService.getScenarios()
            .subscribe(function (scenarios) { return _this.scenarios = scenarios; }, function (error) { return _this.errorMessage = error; });
        console.log('Scenarios: ' + this.scenarios.length);
        console.log('Error Message: ' + this.errorMessage);
    };
    MultiCurvesComponent.prototype.generateChartUsingC3 = function () {
        var _this = this;
        console.log('making chart');
        var chart = new chart_1.Chart();
        var x = 1, y = 1;
        var shock = [], stress = [], base = [], xAxis;
        this.scenario.Countries.forEach(function (country) {
            country.Curves.forEach(function (curve) {
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
                chart.drawLinear([xAxis, shock, stress, base], '#chart' + country.Name + curve.Name, _this.getChartType(curve.Method));
                y++;
            });
            x++;
        });
    };
    MultiCurvesComponent.prototype.getChartType = function (method) {
        switch (method) {
            case 'Cubic Spline': return 'spline';
            default: return '';
        }
    };
    MultiCurvesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'multicurves',
            templateUrl: 'multi-curves.component.html',
            styleUrls: ['multi-curves.component.css']
        }), 
        __metadata('design:paramtypes', [scenario_service_1.ScenarioService])
    ], MultiCurvesComponent);
    return MultiCurvesComponent;
}());
exports.MultiCurvesComponent = MultiCurvesComponent;
//# sourceMappingURL=multi-curves.component.js.map