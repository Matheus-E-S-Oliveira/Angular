import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponetsComponent } from './new-componets.component';

describe('NewComponetsComponent', () => {
  let component: NewComponetsComponent;
  let fixture: ComponentFixture<NewComponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
