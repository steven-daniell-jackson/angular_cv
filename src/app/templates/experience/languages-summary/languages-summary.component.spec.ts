import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSummaryComponent } from './languages-summary.component';

describe('LanguagesSummaryComponent', () => {
  let component: LanguagesSummaryComponent;
  let fixture: ComponentFixture<LanguagesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
