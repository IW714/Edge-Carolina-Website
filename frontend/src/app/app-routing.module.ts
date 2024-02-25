import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateComponent } from "./template/template.component";
import { AppComponent } from "./app.component";

const routes: Routes = [TemplateComponent.Route];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
