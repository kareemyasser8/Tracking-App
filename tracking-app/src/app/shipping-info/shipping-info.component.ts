import { ActivatedRoute } from '@angular/router';
import { TrackService } from './../services/track.service';
import { Component, OnInit } from '@angular/core';
import { CurrentStatus } from '../currentStatus.interface';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {

  isNotFoundTrack: boolean;
  trackData: CurrentStatus = {
    state: '',
    timestamp: ''
  };
  desiredShippingNo: string;
  errorMessage = `No record of this tracking number can be found at this time,
                  please check the number and try again later.
                  For further assistance, please contact Customer Service.`



  constructor(private service: TrackService,
    private route: ActivatedRoute,
    public datepipe: DatePipe) {
  }

  estimateLastUpdateCountedDays(date: string) {
    const oneDay = 24 * 60 * 60 * 1000;
    let then = new Date(date);
    let now = new  Date;

    const differenceMs = Math.abs(then.valueOf() - now.valueOf());
    return Math.round(differenceMs/ oneDay)

  }


ngOnInit(): void {

  this.route.queryParamMap.subscribe(
    params => {
      let id = this.route.snapshot.queryParamMap.get('shippment_number')
      this.desiredShippingNo = id;
      // console.log("the id: ", id);
      this.service.getTrackInfo(id)
        .subscribe({
          next: (response: any) => {
            this.trackData.state = response.CurrentStatus.state;
            this.trackData.timestamp = response.CurrentStatus.timestamp;

            this.isNotFoundTrack = false;
            // console.log(response)
          }
          ,
          error: (error: Response) => {
            if (error.status === 404) {
              this.isNotFoundTrack = true;
              console.error(error)
            } else {
              alert('Un Expected Error happened')
              this.isNotFoundTrack = true;
              console.error(error)
            }
          }
        }
        )

    }
  );



}


}
