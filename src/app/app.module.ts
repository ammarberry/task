import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DiagramComponent } from './diagram/diagram.component';
import { CardComponent } from './card/card.component';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { TableComponent } from './table/table.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { QRCodeModule } from 'angularx-qrcode';
import {ToastModule} from 'primeng/toast'



@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    TooltipModule,
    NgApexchartsModule,
    StyleClassModule,
    InputSwitchModule,
    QRCodeModule,
    ToastModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
