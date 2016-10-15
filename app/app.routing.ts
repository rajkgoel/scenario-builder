import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioEditorComponent } from './scenario-editor/scenario-editor.component';
import { MultiCurvesComponent } from './multi-curves/multi-curves.component';

const appRoutes: Routes = [
  { path: 'scenarioeditor', component: ScenarioEditorComponent, data: { subTitle: 'Scenario Editor'} },
  { path: 'multicurves', component: MultiCurvesComponent, data: { subTitle: 'All Country Charts'} },
  { path: '', component: ScenarioEditorComponent, data: { title: 'Scenario Editor'} },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);