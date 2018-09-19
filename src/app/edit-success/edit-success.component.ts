import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { Guest, GuestResult } from "../guest";
import { DbService } from "../db.service";
import { PageEvent, MatPaginator } from "@angular/material";
import { tap, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-edit-success",
  templateUrl: "./edit-success.component.html",
  styles: [
    `
      .container {
        padding: 10px;
      }

      header {
        margin-left: 15px;
      }

      .title {
        margin-bottom: 10px;
      }

      .mat-line a {
        font-size: 1.4em;
        margin-top: 5px;
      }
    `
  ]
})
export class EditSuccessComponent implements OnInit {
  result: GuestResult;

  pageSize = 4;
  pageSizeOptions: number[] = [4, 8, 16, 100];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild("input")
  input: ElementRef;

  constructor(private db: DbService) {}

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadData();
        })
      )
      .subscribe();

    this.paginator.page.pipe(tap(() => this.loadData())).subscribe();
  }

  loadData() {
    this.db
      .getGuestList(
        this.input.nativeElement.value,
        this.paginator.pageIndex,
        this.paginator.pageSize
      )
      .subscribe(res => {
        this.result = res;
        this.paginator.length = res.count;
      });
  }

  ngOnInit() {
    this.db
      .getGuestList(this.input.nativeElement.value, 0, this.pageSize)
      .subscribe(res => {
        this.result = res;
      });
  }
}
