import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AngularFireModule } from "angularfire2";


import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: SecureComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
