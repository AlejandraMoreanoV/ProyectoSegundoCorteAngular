import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSiteComponent } from './list-all-site.component';

describe('ListAllSiteComponent', () => {
  let component: ListAllSiteComponent;
  let fixture: ComponentFixture<ListAllSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
