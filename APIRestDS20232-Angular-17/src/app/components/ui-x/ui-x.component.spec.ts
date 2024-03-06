import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiXComponent } from './ui-x.component';

describe('UiXComponent', () => {
  let component: UiXComponent;
  let fixture: ComponentFixture<UiXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
