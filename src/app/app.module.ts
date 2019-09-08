import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorComponent } from './componets/operator/operator.component';
import { RefillFormComponent } from './componets/refill-form/refill-form.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorService } from './services/operator.service';
import { OperatorResolver } from './resolvers/operator.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    RefillFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [OperatorService, OperatorResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
