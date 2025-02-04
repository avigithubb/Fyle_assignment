import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WorkoutTodoComponent } from './My_components/workout-todo/workout-todo.component';
import { WorkoutDetailsComponent } from './My_components/workout-details/workout-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fyle_assignment';
}
