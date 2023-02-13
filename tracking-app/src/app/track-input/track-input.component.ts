import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'track-input',
  templateUrl: './track-input.component.html',
  styleUrls: ['./track-input.component.scss']
})
export class TrackInputComponent implements OnInit {

  inputTrackNo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  Submit(f): void {
    this.inputTrackNo = f.value.TrackingNum;
    console.log(this.inputTrackNo);
    this.inputTrackNo = '';
  }

}
