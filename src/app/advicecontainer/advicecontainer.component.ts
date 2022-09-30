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
  @Input() width = 30;
  @Input() height = 40;
  bottom = 25;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  adviceDetails!: AdviceDetails;
  style!: object;
  styleButton!: object;
  styleButtonDiv!: object;
  windowWidth = window.innerWidth;
  constructor(private _adviceService: AdvicecontainerService) {}

  ngOnInit(): void {
    this.style = {
      width: this.width + 'vw',
      height: this.height + 'vh',
      color: 'white',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-around',
      'align-items': 'center',
      gap: 5 + this.type,
      'font-weight': 800,
      'background-color': '#313A49',
      'border-radius': '20px',
      overflow: 'hidden',
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
      left:
        (this.windowWidth * (this.width / 100)) / 2 - this.bottom + this.type,
    };
    window.onresize = this.windowResize;
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
  windowResize() {
    this.windowWidth = window.innerWidth;
  }
}
