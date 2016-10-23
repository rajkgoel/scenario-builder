import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent }   from './app.component';

import { ScenarioService } from './services/scenario.service';
import { StaticDataService } from './services/static-data.service';
import { HighlightZeroShocksDirective } from './directives/highlight-zero.shocks';

import { MultiCurvesModule } from './multi-curves/multi-curves.module';
import { ScenarioEditorModule } from './scenario-editor/scenario-editor.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    ScenarioEditorModule,
    MultiCurvesModule
    /*InMemoryWebApiModule.forRoot(ScenarioData)
    MdCoreModule.forRoot(),
    MdInputModule.forRoot(),
    MdButtonModule.forRoot()*/
    ],
  declarations: [ 
    AppComponent,
    HighlightZeroShocksDirective
    ],
  providers: [
    ScenarioService, 
    StaticDataService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
