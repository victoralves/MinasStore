import { Component, OnInit, Input, setTestabilityGetter } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

import { Restaurant } from './restaurant.model';

@Component({
  selector: 'vaas-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0ms ease-in-out')
      ])
    ])
  ]
})

export class RestaurantComponent implements OnInit {

  restaurantState = 'ready'

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
