import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { EmailModalComponent } from './components/email-modal/email-modal.component';
import { BulletPointsComponent } from './components/content/bullet-points/bullet-points.component';
import { KhashQuoteComponent } from './components/content/khash-quote/khash-quote.component';
import { ParallaxComponent } from './components/content/parallax/parallax.component';
import { VideoSectionComponent } from './components/content/video-section/video-section.component';
import { VideoComponent } from './components/content/video-section/video/video.component';
import { TextComponent } from './components/content/video-section/text/text.component';
import { SafePipe } from './pipes/safe.pipe';
import { SectionTitleComponent } from './components/content/section-title/section-title.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { MapComponent } from './components/content/map/map.component';
@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        EmailModalComponent,
        BulletPointsComponent,
        KhashQuoteComponent,
        ParallaxComponent,
        VideoSectionComponent,
        VideoComponent,
        TextComponent,
        SafePipe,
        SectionTitleComponent,
        ContactComponent,
        MapComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faTwitter, faInstagram, faFacebook, faLinkedin);
    }
}
