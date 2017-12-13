import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes} from './app.routers';
import { AppComponent } from './app.component';
import { NvButtonComponent } from './nv-button/nv-button.component';
import { NgUvdreamModule } from '../components/ng-uvdream.module';
@NgModule({
  declarations: [
    AppComponent,
    NvButtonComponent
],
  imports: [
    BrowserModule,
    NgUvdreamModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
