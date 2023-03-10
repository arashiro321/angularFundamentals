import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBiComponent } from './two-way-data-bi.component';

describe('TwoWayDataBiComponent', () => {
  let component: TwoWayDataBiComponent;
  let fixture: ComponentFixture<TwoWayDataBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
