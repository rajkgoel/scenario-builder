import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import 'rxjs/add/operator/map';

import { MultiCurvesComponent }  from './multi-curves.component';


@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ MultiCurvesComponent ],
  exports:      [ MultiCurvesComponent ]
})
export class MultiCurvesModule { }
