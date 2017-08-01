import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePortfolioComponent } from './homepage-portfolio.component';

describe('HomepagePortfolioComponent', () => {
  let component: HomepagePortfolioComponent;
  let fixture: ComponentFixture<HomepagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
