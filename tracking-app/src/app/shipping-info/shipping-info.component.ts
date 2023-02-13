import { TrackService } from './../services/track.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {

  isNotFoundTrack = false;
  errorMessage = `No record of this tracking number can be found at this time,
                  please check the number and try again later.
                  For further assistance, please contact Customer Service.`



  constructor(private service: TrackService) {

  }

  ngOnInit(): void {
    this.service.getTrackInfo('9442984')
      .subscribe({
        next: (response) => console.log(response),
        error: (error:Response) => {
          if(error.status === 404){
            this.isNotFoundTrack = true;
            console.error(error)
          }else{
            alert('Un Expected Error happened')
            this.isNotFoundTrack = true;
            console.error(error)
          }
        }
          ,
      }
      )
  }

}
