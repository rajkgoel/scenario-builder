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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var app_component_1 = require('./app.component');
var scenario_editor_component_1 = require('./scenario-editor/scenario-editor.component');
var multi_curves_component_1 = require('./multi-curves/multi-curves.component');
var scenario_service_1 = require('./services/scenario.service');
var static_data_service_1 = require('./services/static-data.service');
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { ScenarioData }  from './scenario-data';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                scenario_editor_component_1.ScenarioEditorComponent,
                multi_curves_component_1.MultiCurvesComponent
            ],
            providers: [
                scenario_service_1.ScenarioService,
                static_data_service_1.StaticDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map