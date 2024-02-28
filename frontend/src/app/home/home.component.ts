import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  public static Route = {
    path: "",
    component: HomeComponent,
  };
  constructor(private router: Router) {}

  /* playZoomVideo() {
    const video = document.getElementById("zoomVideo") as HTMLVideoElement;
    video.style.display = "block";
    video.play();
  }
  public videoEnded() {
    this.router.navigate(["/about"]);
  } */

  navigateToAbout() {
    this.router.navigate(["/about"]);
  }
}
