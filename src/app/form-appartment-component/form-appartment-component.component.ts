import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartment-component',
  templateUrl: './form-appartment-component.component.html',
  styleUrls: ['./form-appartment-component.component.css']
})
export class FormAppartmentComponentComponent {

  id : any

  apartForm!: FormGroup;
  constructor(private act : ActivatedRoute){}

  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
    console.log(this.id)
    this.apartForm = new FormGroup({
      ApprtN: new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      FloorN: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      Surface: new FormControl('', Validators.required),
      Terrace: new FormControl('', [Validators.required, Validators.pattern(/Yes/)]),
      SurfaceT: new FormControl('', Validators.required),
      Caregotie: new FormControl('', Validators.required),
      Description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      Residance: new FormControl(this.id, Validators.required),
    });
  }

}
