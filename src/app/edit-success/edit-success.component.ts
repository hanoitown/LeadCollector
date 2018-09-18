import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Guest, GuestResult } from "../guest";
import { DbService } from "../db.service";

@Component({
  selector: "app-edit-success",
  templateUrl: "./edit-success.component.html",
  styles: []
})
export class EditSuccessComponent implements OnInit {
  guests: Guest[];  
  result: GuestResult;

  constructor(private db: DbService) {}

  ngOnInit() {
    // this.db.getProfiles().subscribe(res => {
    //   console.log(JSON.stringify(res));
    //   this.guests = res;
    // });
    this.db.getAll().subscribe(res=>{
      this.result = res;
    })
  }
}
