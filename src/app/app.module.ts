import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { storageComponent } from './storage/storage.component';




import { FirebaseStorageService } from './firebase-storage.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyAeMz4NCkvx0qcNjHVmZXdN5v5TDaqg-3E',
    authDomain: 'neatdesafio.firebaseapp.com',
    databaseURL: 'https://neatdesafio.firebaseio.com',
    storageBucket: 'neatdesafio.appspot.com',
    messagingSenderId: '444923741955',
    appId: '1:444923741955:web:9294d5f361fb07555f8b36',
    measurementId: 'G-1GBLGQ2XRL'
};

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    storageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig,FirebaseStorageService),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
