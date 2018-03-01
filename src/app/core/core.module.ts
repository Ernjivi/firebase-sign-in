import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
