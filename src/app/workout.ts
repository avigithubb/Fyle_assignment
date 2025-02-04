export class Workout {
    id: number
    name: string;
    workouts: {type: string, minutes: number}[];  // Array of strings (or specify a different type)
    

    constructor(id: number, name: string, workouts: {type: string, minutes: number}[]) {
        this.id = id;
        this.name = name;
        this.workouts = workouts;
    }
}