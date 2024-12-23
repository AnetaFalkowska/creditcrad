import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { DateFormControl } from '../date-form-control';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, JsonPipe, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.scss',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(6),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      // Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
     
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });



  onSubmit() {
    console.log("hi")
  }

  onResetClick() {
    this.cardForm.reset()
  }
}
