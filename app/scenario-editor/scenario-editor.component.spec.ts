import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { ScenarioEditorComponent } from './scenario-editor.component';
import { ScenarioEditor } from '../model/scenario-editor';
import { ScenarioService } from '../services/scenario.service';
import { StaticDataService } from '../services/static-data.service';
import { FakeScenarioService } from '../services/fakes/fake-scenario.service';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Scenario } from '../classes/scenario';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

let comp:    ScenarioEditorComponent;
let fixture: ComponentFixture<ScenarioEditorComponent>;
let de:      DebugElement;
let el:      HTMLElement;
let scenarioService: any;
let staticDataService: any;
let spy: jasmine.Spy;
let testScenarios : Observable<Scenario[]>;
let allCountries: string[];
let methods: string[];
let tenors: string[];

describe('ScenarioEditorComponent', () => {
    beforeEach( async(() => {

        TestBed.configureTestingModule({
            imports : [ FormsModule, HttpModule ],
            declarations : [ScenarioEditorComponent],
            providers: [ 
                {provide: ScenarioService, useClass:FakeScenarioService }, 
                {provide: StaticDataService, useClass:StaticDataService } ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScenarioEditorComponent);
        comp = fixture.componentInstance;
        
        scenarioService = fixture.debugElement.injector.get(ScenarioService);
        staticDataService = fixture.debugElement.injector.get(StaticDataService);

        allCountries = [] = [ "", "US", "Germany", "UK", "Japan" ];
        methods = ['Linear', 'Cubic Spline'];
        tenors = ['1M', '3M'];

        fixture.detectChanges();
        
        });
    
    it('true is true', () => expect(true).toBe(true));

    it('Cubic Spline should return the chart type as `spline`', async(() => {
        fixture.whenStable().then(() => {
            let method = comp.getChartType('Cubic Spline');
            expect(method).toEqual('spline');
        });
        }));

    
    it('Countries should be set', async(() => {
        fixture.whenStable().then(() => {
            expect(comp.allCountries).toEqual(allCountries)});
        })); 
});
