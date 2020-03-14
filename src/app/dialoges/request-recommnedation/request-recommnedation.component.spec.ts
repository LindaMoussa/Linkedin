import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRecommnedationComponent } from './request-recommnedation.component';

describe('RequestRecommnedationComponent', () => {
  let component: RequestRecommnedationComponent;
  let fixture: ComponentFixture<RequestRecommnedationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRecommnedationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRecommnedationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
