import { Component, NgModule } from '@angular/core';
import { AgenciaService } from '../../../services/agencia/agencia.service';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {FloatLabelModule} from 'primeng/floatlabel';
import { MatCard, MatCardContent } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-agencia',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,FloatLabelModule,FormsModule,MatCard, MatCardContent],
  templateUrl: './agencia.component.html',
  styleUrl: './agencia.component.css'
})
export class AgenciaComponent {
  userForm: FormGroup ;


constructor(private agencia:AgenciaService,private fb: FormBuilder){
  this.userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    city:['', Validators.required],
    province:['', Validators.required],
    phone:['', Validators.required],
    nib:['', Validators.required],
    country:['', Validators.required],
    localization:['', Validators.required]
  });
}

  onSubmit() {

    console.log('fui chamado')
    if (this.userForm) {
      const agencia = this.userForm.value;
      this.agencia.saveAgence(agencia).then(() => {
        if(this.userForm){
          this.userForm.reset();

        }

console.log('passei')
      });


    }else{
      console.log('não passei ')
    }
  }


}
