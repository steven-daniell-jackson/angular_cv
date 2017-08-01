import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutSummaryComponent } from './templates/about/components/about-summary/about-summary.component';
import { AboutContentComponent } from './templates/about/components/about-content/about-content.component';
import { AboutProfileLinksComponent } from './templates/about/components/about-profile-links/about-profile-links.component';
import { AboutYoutubeChannelsComponent } from './templates/about/components/about-youtube-channels/about-youtube-channels.component';
import { ContactInformationComponent } from './templates/contact/contact-information/contact-information.component';
import { ContactComponent } from './templates/contact/contact.component';
import { ExperienceComponent } from './templates/experience/experience.component';
import { LanguagesSummaryComponent } from './templates/experience/languages-summary/languages-summary.component';
import { ExperienceSummaryComponent } from './templates/experience/experience-summary/experience-summary.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { HomepageCarouselComponent } from './templates/homepage/components/homepage-carousel/homepage-carousel.component';
import { HomepageAboutComponent } from './templates/homepage/components/homepage-about/homepage-about.component';
import { HomepageExperienceSliderComponent } from './templates/homepage/components/homepage-experience-slider/homepage-experience-slider.component';
import { HomepageWorkExperienceComponent } from './templates/homepage/components/homepage-work-experience/homepage-work-experience.component';
import { HomepagePortfolioComponent } from './templates/homepage/components/homepage-portfolio/homepage-portfolio.component';
import { ContactMeComponent } from './templates/shared/contact-me/contact-me.component';
import { NavbarComponent } from './templates/shared/navbar/navbar.component';
import { FooterComponent } from './templates/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSummaryComponent,
    AboutContentComponent,
    AboutProfileLinksComponent,
    AboutYoutubeChannelsComponent,
    ContactInformationComponent,
    ContactComponent,
    ExperienceComponent,
    LanguagesSummaryComponent,
    ExperienceSummaryComponent,
    HomepageComponent,
    HomepageCarouselComponent,
    HomepageAboutComponent,
    HomepageExperienceSliderComponent,
    HomepageWorkExperienceComponent,
    HomepagePortfolioComponent,
    ContactMeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
