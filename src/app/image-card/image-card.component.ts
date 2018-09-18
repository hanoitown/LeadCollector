import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styles: [
    `
      .mat-card {
        width: 400px;
        margin: 2rem auto;
      }
      .mat-card .mat-card-actions {
        padding-top: 0;
      }
      .mat-card .mat-button {
        margin: 0 auto;
        display: block;
      }
    `
  ]
})
export class ImageCardComponent implements OnInit {
  private image: CatImage = {
    message: "Progressive Web Cat",
    api: "https://cataas.com/cat/says/",
    fontsize: 40
  };
  public src: string;
  ngOnInit() {
    this.src = this.image.api + this.image.message;
  }
  generateSrc(): void {
    this.src =
      this.image.api +
      this.image.message +
      "?size=" +
      this.image.fontsize +
      "&ts=" +
      Date.now();
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
