import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
