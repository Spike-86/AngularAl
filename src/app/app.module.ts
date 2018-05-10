import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutGuard } from './about.guard';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { GlobalConfService} from './global-conf.service';
import { AsideComponent } from './aside/aside.component';
import { MessagesService } from './messages.service';
import { ModificationListService } from './modification/modification.service';
import { ModificationAddDialogComponent } from './modification-add-dialog/modification-add-dialog.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ModificationAddDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [AboutGuard, AuthGuard, AuthService, GlobalConfService, MessagesService, ModificationListService],
  bootstrap: [AppComponent],
  entryComponents: [ModificationAddDialogComponent]
})
export class AppModule { }
