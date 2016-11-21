"use strict";
var router_1 = require('@angular/router');
var scenario_editor_component_1 = require('./scenario-editor/scenario-editor.component');
var create_scenario_component_1 = require('./scenario-editor/create-scenario.component');
var multi_curves_component_1 = require('./multi-curves/multi-curves.component');
var appRoutes = [
    { path: 'scenarioeditor', component: scenario_editor_component_1.ScenarioEditorComponent, data: { subTitle: 'Scenario Editor' } },
    { path: 'createscenario/:id', component: create_scenario_component_1.CreateScenarioComponent, data: { subTitle: 'Edit Scenario' } },
    { path: 'createscenario', component: create_scenario_component_1.CreateScenarioComponent, data: { subTitle: 'Add Scenario' } },
    { path: 'multicurves', component: multi_curves_component_1.MultiCurvesComponent, data: { subTitle: 'All Country Charts' } },
    { path: '', component: scenario_editor_component_1.ScenarioEditorComponent, data: { title: 'Scenario Editor' } },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map