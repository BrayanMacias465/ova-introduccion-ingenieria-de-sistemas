import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {
  
  loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, 
    private authService: AutenticacionService, private router: Router ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          this.router.navigateByUrl('/');
        }, error => {
          console.log( error.error.msg );
        }
      );
    }else {
      this.loginForm.markAllAsTouched();
    }

  }
}
