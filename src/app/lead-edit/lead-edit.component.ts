import { Component, OnInit } from "@angular/core";
import { NgForm, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { DbService } from "../db.service";
import { Guest } from "../guest";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-lead-edit",
  templateUrl: "./lead-edit.component.html",
  styles: [
    `
      .frmEdit {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .demo-full-width {
        width: 100%;
      }
      .radio-group {
        display: inline-flex;
        flex-direction: column;
      }

      .radio-button {
        margin: 5px;
      }

      .error {
        color: red;
      }
    `
  ]
})
export class LeadEditComponent implements OnInit {
  regiForm: FormGroup;
  guest: Guest;
  submitted: boolean = false;
  message: string;
  // name: string = "";
  // phone: string = "";
  // address: string = "";
  // dob: Date = null;
  // gender: string = "";
  // email: string = "";

  constructor(
    private fb: FormBuilder,
    private db: DbService,
    private router: Router
  ) {
    // To initialize FormGroup
    this.regiForm = fb.group({
      name: [null, Validators.required],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11)
        ])
      ],
      note: "",
      // dob: [null],
      gender: ["Male", Validators.required],
      email: [null, Validators.compose([Validators.email])]
    });
  }

  ngOnInit() {}
  // On Change event of Toggle Button
  onChange(event: any) {
    // if (event.checked == true) {
    //   this.IsAccepted = 1;
    // } else {
    //   this.IsAccepted = 0;
    // }
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(form);

    this.guest = { ...this.guest, ...this.regiForm.value };

    this.db.saveProfile(this.guest).subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.submitted = true;
        this.router.navigate(["editSuccess"]);
      },
      error => {
        this.message = "Duplicate phone number";
      }
    );
  }
}
