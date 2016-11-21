import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import 'rxjs/add/operator/map';

import { ScenarioEditorComponent }  from './scenario-editor.component';
import { CreateScenarioComponent }  from './create-scenario.component';


@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ScenarioEditorComponent, CreateScenarioComponent ],
  exports:      [ ScenarioEditorComponent, CreateScenarioComponent ]
})
export class ScenarioEditorModule { }
