import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProfileLinksComponent } from './about-profile-links.component';

describe('AboutProfileLinksComponent', () => {
  let component: AboutProfileLinksComponent;
  let fixture: ComponentFixture<AboutProfileLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProfileLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProfileLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
