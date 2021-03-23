import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyclubSharedModule } from 'app/shared/shared.module';
import { MyclubCoreModule } from 'app/core/core.module';
import { MyclubAppRoutingModule } from './app-routing.module';
import { MyclubHomeModule } from './home/home.module';
import { MyclubEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyclubSharedModule,
    MyclubCoreModule,
    MyclubHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyclubEntityModule,
    MyclubAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyclubAppModule {}
