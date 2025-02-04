import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Workout } from '../../workout';
import { WorkoutDetailsComponent } from '../workout-details/workout-details.component';
import { WorkoutService } from '../../workout.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-workout-todo',
  imports: [FormsModule],
  templateUrl: './workout-todo.component.html',
  styleUrl: './workout-todo.component.css'
})
export class WorkoutTodoComponent implements OnInit {
  username: string = '';
  type: string = '';
  minutes: number = 0;
  // workouts: { id: number; username: string; type: string; minutes: number }[] = [];
  private nextId: number = 1;
 
  @Output() workoutAdd: EventEmitter<Workout> = new EventEmitter();
  
  

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void{

  }

  onSubmit() {

    
    const workout = {
      id: this.nextId++,
      name: this.username,
      workouts: [
        { type: this.type, minutes: this.minutes },
      ]

    }
   

    // this.workoutAdd.emit(workout);

    this.workoutService.addWorkout(workout);

    this.username = '';
    this.type = '';
    this.minutes = 0;


  }


    
}
