import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AboutGuard } from './about.guard';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Md5 } from 'ts-md5/dist/md5';
import { GlobalConfService} from './global-conf.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [AboutGuard, AuthGuard, AuthService, GlobalConfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }