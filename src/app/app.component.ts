import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChild,
  ElementRef
} from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


export const hoverAnimation = 
  trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.5s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('.5s', style({ opacity: 0 }))
    ])
  ]);


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    hoverAnimation
  ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild("itemsDiv", { static: false }) itemsDiv: ElementRef;

  showHover: boolean = false;
  hoverTop: string = "";
  hoverLeft: string = "";

  items: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "R",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  ngAfterViewInit() {}

  mouseEnter(event: MouseEvent, item) {
    this.showHover = true;

    const hoverHeight: number = 100;
    const itemsHeight: number = this.itemsDiv.nativeElement.offsetHeight;
    const itemsScrollTop: number = this.itemsDiv.nativeElement.scrollTop;

    const buttonTop: number = (<HTMLElement>event.target).offsetTop;
    const buttonLeft: number = (<HTMLElement>event.target).offsetLeft;
    const buttonWidth: number = (<HTMLElement>event.target).offsetWidth;
    const buttonHeight: number = (<HTMLElement>event.target).offsetHeight;

    //set the left position of the hover
    this.hoverLeft = (buttonLeft + buttonWidth).toString() + "px";

    //set the top postiion of the hover
    if (buttonTop - itemsScrollTop + hoverHeight > itemsHeight) { 
      //hover will go off the bottom of the scroll area so adjust the top accordingly.
      this.hoverTop = buttonTop + buttonHeight - 100 + "px";
    } else {
      //hover is wiithin the scroll area
      this.hoverTop = buttonTop + "px";
    }
  }

  mouseOut(event, item) {
    this.showHover = false;
  }
}
