import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { PromediosComponent } from '../promedios/promedios.component';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
// import {Md5} from 'ts-md5/dist/md5';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    // Md5
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PromediosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
