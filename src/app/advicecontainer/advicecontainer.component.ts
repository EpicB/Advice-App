import { Component, Input, OnInit } from '@angular/core';
import { AdvicecontainerService } from './advicecontainer.service';
import { AdviceDetails } from './models/Advice';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-advicecontainer',
  templateUrl: './advicecontainer.component.html',
  styleUrls: ['./advicecontainer.component.css'],
})
export class AdvicecontainerComponent implements OnInit {
  @Input() type = 'px';
  @Input() width = 600;
  @Input() height = 400;
  bottom = 25;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  adviceDetails!: AdviceDetails;
  style!: object;
  styleButton!: object;
  styleButtonDiv!: object;

  constructor(private _adviceService: AdvicecontainerService) {}

  ngOnInit(): void {
    this.style = {
      width: this.width + this.type,
      height: this.height + this.type,
      color: 'white',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-around',
      'align-items': 'center',
      gap: 5 + this.type,
      'font-weight': 800,
      'background-color': '#313A49',
      'border-radius': '20px',
    };
    this.styleButton = {
      width: 50 + this.type,
      height: 50 + this.type,
      'border-radius': '100%',
      'box-shadow': '0 0 10px #53FFA9',
      'background-color': '#53FFA9',
      'border-color': '#53FFA9',
    };
    this.styleButtonDiv = {
      position: 'relative',
      bottom: this.bottom + this.type,
      left: this.width / 2 - this.bottom + this.type,
    };

    this.GetAdvice();
  }
  GetAdvice() {
    this._adviceService
      .GetAdivceDetails()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.adviceDetails = data.slip;
      });
  }
}
