import { Component, OnInit } from '@angular/core';
import { Workout } from '../../workout';
import { NgFor } from '@angular/common';
import { WorkoutService } from '../../workout.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-workout-details',
  imports: [NgFor, FormsModule],
  templateUrl: './workout-details.component.html',
  styleUrl: './workout-details.component.css'
})
export class WorkoutDetailsComponent implements OnInit {

    username: string="";
    filter: string="";

    workouts: Workout[] = [];
    allWorkouts: Workout[] = [];

    constructor(private workoutService: WorkoutService){}


    onSubmit(){
      if(this.username.trim() !== ""){
          const result = this.workouts.filter(w => w.name.toLowerCase() === this.username.toLowerCase())
          this.workouts = result
      }
      else{
        this.workouts = [...this.allWorkouts];
      }

      if(this.filter !== ""){
        const results = this.workouts.filter(w => 
          w.workouts.some(t => t.type.toLowerCase() === this.filter.toLowerCase())  // ✅ Proper filtering
        );
        
        this.workouts = results;
      }
      else{
        this.workouts = [...this.allWorkouts];
      }
    }
    

    ngOnInit(): void {
      this.workoutService.workouts$.subscribe(workouts => {
        this.workouts = workouts;
        this.allWorkouts = workouts;
      });
      
    }

    

    // addWorkout(event: { id: number; option: string; minutes: number }){
      
    //   this.workouts.push(workout)
    // }

    // allWorkouts(): Workout[]{
    //   return this.workouts;
    // }

}
