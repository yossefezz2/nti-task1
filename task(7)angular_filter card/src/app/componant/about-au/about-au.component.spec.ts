import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAuComponent } from './about-au.component';

describe('AboutAuComponent', () => {
  let component: AboutAuComponent;
  let fixture: ComponentFixture<AboutAuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAuComponent]
    });
    fixture = TestBed.createComponent(AboutAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
