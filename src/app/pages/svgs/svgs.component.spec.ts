import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgsComponent } from './svgs.component';

describe('SvgsComponent', () => {
  let component: SvgsComponent;
  let fixture: ComponentFixture<SvgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
