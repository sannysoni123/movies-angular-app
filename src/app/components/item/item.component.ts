import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Router } from '@angular/router';
import { Item } from './item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;
  readonly imageSizes = IMAGE_SIZES;
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {}
}
