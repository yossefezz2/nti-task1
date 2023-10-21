import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutAuComponent } from './componant/about-au/about-au.component';
import { ServicesComponent } from './componant/services/services.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './componant/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    AboutAuComponent,
    ServicesComponent,
    IndexComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
