import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faPlusSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  // Login credentials stored to be checked in the view
  loginID: any = "";
  loginPassword: any = "";

  // Initialization of the loginForm
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  // Checks if there is any session variable remain in the storage
  // if so - checkes if the 'username' and 'password' variables are correct
  // then assigns the login credentials created above
  ngOnInit(): void {
    if (sessionStorage.length > 0) {
      if (sessionStorage.getItem('username') == "safabayraktar" && sessionStorage.getItem('password') == "Goktan150150") {
        this.loginID = sessionStorage.getItem('loginID');
        this.loginPassword = sessionStorage.getItem('loginPassword');
      }
    }

  }

  // Action occurs when the form is submitted
  // Stores the admin login credentials only if they are correct
  // if not - then credentials will remain empty and no access will be granted
  onSubmit(data: any) {
    if (data.username == "safabayraktar" && data.password == "Goktan150150") {
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('password', data.password);
      this.loginID = data.username;
      this.loginPassword = data.password;
    }
  }

  // Clears the stored credentials from session
  // and clears the login credentials created above
  // removes the granted access to the admin module
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.loginID = "";
    this.loginPassword = "";
  }
}
