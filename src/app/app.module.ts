import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faGripVertical, faHome, faChalkboardTeacher, faChartLine, faTag, faCheck} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedin , faWhatsapp, faTelegram, } from '@fortawesome/free-brands-svg-icons';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TestimonyComponent } from './testimony/testimony.component';

// tslint:disable-next-line: max-line-length
library.add(faTelegram, faInstagram, faYoutube, faLinkedin, faWhatsapp, faCircle,  faGripVertical, faHome, faChalkboardTeacher, faChartLine, faTag, faCheck);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    SubscriptionComponent,
    TestimonyComponent
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
