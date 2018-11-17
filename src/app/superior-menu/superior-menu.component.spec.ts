import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorMenuComponent } from './superior-menu.component';


describe('SuperiorMenuComponent', () => {
  let component: SuperiorMenuComponent;
  let fixture: ComponentFixture<SuperiorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperiorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
