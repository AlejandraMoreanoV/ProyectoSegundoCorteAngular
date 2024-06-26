import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNavbarComponent } from './help-navbar.component';

describe('HelpNavbarComponent', () => {
  let component: HelpNavbarComponent;
  let fixture: ComponentFixture<HelpNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
