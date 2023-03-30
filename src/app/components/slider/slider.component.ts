import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Item } from '../item/item';
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent {
  @Input() items: Item[] = [];
  @Input() isBanner: boolean = false;
  readonly imageSizes = IMAGE_SIZES;
  currentSlideIndex: number = 0;
  constructor() {}
  ngOnInit() {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
