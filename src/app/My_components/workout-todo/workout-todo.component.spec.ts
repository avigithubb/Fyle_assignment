import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTodoComponent } from './workout-todo.component';

describe('WorkoutTodoComponent', () => {
  let component: WorkoutTodoComponent;
  let fixture: ComponentFixture<WorkoutTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
