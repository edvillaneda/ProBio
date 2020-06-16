import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { LeftbarComponent } from './shared/leftbar/leftbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    LeftbarComponent,
    FooterComponent,
    AlertasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
