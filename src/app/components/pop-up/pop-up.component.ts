import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(PopUpOverview);
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-pop-up-overview',
  templateUrl: 'pop-up-overview.html',
})
// tslint:disable-next-line: component-class-suffix
export class PopUpOverview {
  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<PopUpOverview>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  goBack(event: MouseEvent) {
    this._bottomSheetRef.backdropClick();
    event.preventDefault();
  }
}

