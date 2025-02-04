import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private workouts: Workout[] = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Swimming', minutes: 60},
          { type: 'Cycling', minutes: 40 }
        ]
      },
    ];

  // BehaviorSubject allows us to store the latest state and update it
  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);
  workouts$ = this.workoutsSubject.asObservable();

  

  constructor() { }

  // Function to add a new workout and notify subscribers
  addWorkout(workout: Workout) {
    const userExists = this.workouts.find(w => w.name === workout.name);
    if(userExists){
      userExists.workouts.push(...workout.workouts);
      this.workoutsSubject.next(this.workouts);
    }
    else{
      this.workouts.push(workout);
      this.workoutsSubject.next(this.workouts);
    }
  }

  // Function to get all workouts
  getWorkouts(): Workout[] {
    return this.workouts;
  }
}
