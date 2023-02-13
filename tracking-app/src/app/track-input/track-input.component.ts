import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'track-input',
  templateUrl: './track-input.component.html',
  styleUrls: ['./track-input.component.scss']
})
export class TrackInputComponent implements OnInit {

  inputTrackNo: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Submit(f): void {
    this.inputTrackNo = f.value.TrackingNum;
    this.router.navigate(
      ['tracking-shipments/'],
      { queryParams: { shippment_number: this.inputTrackNo } }
    )
    this.inputTrackNo = '';
  }

}
