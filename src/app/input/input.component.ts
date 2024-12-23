import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
@Input() control!:FormControl;
@Input() label!:string;

showErrors() {
  return this.control.dirty && this.control.touched &&
  this.control.errors
}

}
