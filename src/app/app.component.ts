import { Component, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private selected: ElementRef;
  private lastSelected: ElementRef;

  constructor(private renderer: Renderer2) {}

  select(e) {
    if (this.lastSelected) this.renderer.removeClass(this.lastSelected, "last");
    this.lastSelected = this.selected;
    this.selected = e;
    if (this.lastSelected) {
      this.renderer.removeClass(this.lastSelected, "active");
      this.renderer.addClass(this.lastSelected, "last");
    }
    this.renderer.addClass(this.selected, "active");
  }
}
