import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AboutSummaryComponent } from './templates/about/components/about-summary/about-summary.component';
import { AboutContentComponent } from './templates/about/components/about-content/about-content.component';
import { AboutProfileLinksComponent } from './templates/about/components/about-profile-links/about-profile-links.component';
import { AboutYoutubeChannelsComponent } from './templates/about/components/about-youtube-channels/about-youtube-channels.component';
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
import { ContactMeComponent } from './shared/contact-me/contact-me.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HompageCarouselComponent } from './templates/hompage-carousel/hompage-carousel.component';
import { AboutComponent } from './templates/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutSummaryComponent,
    AboutContentComponent,
    AboutProfileLinksComponent,
    AboutYoutubeChannelsComponent,
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
    FooterComponent,
    NavbarComponent,
    NavMenuComponent,
    AboutComponent,
    HompageCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
