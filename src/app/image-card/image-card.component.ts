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
  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  public src: string;
  ngOnInit() {
    this.src = this.image.api + this.image.message + 
    '?size=' + this.image.fontsize;;

    if (!navigator.onLine) {
      this.button.text = 'Sorry, you\'re offline';
      this.button.disabled = true;
    }
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
class Button { 
  text: string;
  disabled: boolean;
  color: string;
}