import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFormComponent } from "./card-form/card-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'creditcrad';
}
