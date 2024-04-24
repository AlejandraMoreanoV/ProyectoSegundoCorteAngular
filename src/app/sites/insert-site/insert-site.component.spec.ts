import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSiteComponent } from './insert-site.component';

describe('InsertSiteComponent', () => {
  let component: InsertSiteComponent;
  let fixture: ComponentFixture<InsertSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
