import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';
import { MyMaterialModule } from './shared/material.module';
import { PopupComponent } from './components/popup/popup.component';
import { WorkService } from './shared/services/work.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxPaginationModule} from 'ngx-pagination';
import { MyFilterPipe } from './pipes/my-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PopupComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),FormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule
    
  ],
  providers: [WorkService],
  entryComponents:[PopupComponent,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
