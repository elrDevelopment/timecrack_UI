import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTaskDetailComponent } from './sub-task-detail.component';

describe('SubTaskDetailComponent', () => {
  let component: SubTaskDetailComponent;
  let fixture: ComponentFixture<SubTaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTaskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
