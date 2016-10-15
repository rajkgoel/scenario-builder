import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent }   from './app.component';
import { ScenarioEditorComponent } from './scenario-editor/scenario-editor.component';
import { MultiCurvesComponent }  from './multi-curves/multi-curves.component';

import { ScenarioService } from './services/scenario.service';
import { StaticDataService } from './services/static-data.service';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { ScenarioData }  from './scenario-data';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    /*InMemoryWebApiModule.forRoot(ScenarioData)
    MdCoreModule.forRoot(),
    MdInputModule.forRoot(),
    MdButtonModule.forRoot()*/
    ],
  declarations: [ 
    AppComponent,
    ScenarioEditorComponent,
    MultiCurvesComponent
    ],
  providers: [
    ScenarioService, 
    StaticDataService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
