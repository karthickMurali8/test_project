import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { preventExit } from './canDeactivate-personal-info/canDeactivate-personal-info.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  personalInfoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private canDeactivate: preventExit
  ) {
    this.personalInfoForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      age : ['',Validators.required],
      city : ['',Validators.required],
      profession : ['',Validators.required],
    })
  }

  submitForm() {
    this.canDeactivate.formSubmitted = true;
  }

}
