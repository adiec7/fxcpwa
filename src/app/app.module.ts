import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faGripVertical, faHome} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedin , faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

library.add(faTelegram, faInstagram, faYoutube, faLinkedin, faWhatsapp, faCircle,  faGripVertical, faHome);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
