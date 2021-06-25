import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider'; 


@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
 
    MatIconModule,
    MatAutocompleteModule,
    MatListModule,
    MatDividerModule
    
  ]
})
export class MaterialModule { }
