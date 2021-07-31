import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

const appRoute: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: '',   redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
