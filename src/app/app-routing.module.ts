import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeadEditComponent } from "./lead-edit/lead-edit.component";
import { EditSuccessComponent } from "./edit-success/edit-success.component";

const routes = [
  { path: "", redirectTo: "editSuccess", pathMatch: "full" },
  { path: "leadEdit", component: LeadEditComponent },
  { path: "editSuccess", component: EditSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
