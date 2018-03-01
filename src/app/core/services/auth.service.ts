import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = this.afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

  oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider);
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

}
