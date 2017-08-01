import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYoutubeChannelsComponent } from './about-youtube-channels.component';

describe('AboutYoutubeChannelsComponent', () => {
  let component: AboutYoutubeChannelsComponent;
  let fixture: ComponentFixture<AboutYoutubeChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYoutubeChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYoutubeChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
