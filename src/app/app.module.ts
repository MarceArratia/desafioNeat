import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { DataDbService } from './services/data-db.service';
import { LoginComponent } from './components/login/login.component';

import {AngularFireAuthModule,AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabaseModule,AngularFireDatabase} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
