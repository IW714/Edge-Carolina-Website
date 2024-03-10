import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { JoinComponent } from "./join/join.component";
import { ProductsComponent } from "./products/products.component";
import { ProductEditorComponent } from "./products/product-editor/product-editor.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "join", component: JoinComponent },
  { path: "products/edit/:product_id", component: ProductEditorComponent },
  { path: "products", component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
