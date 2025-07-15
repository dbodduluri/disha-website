import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import {routes} from './app.routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('disha-webiste');
}
