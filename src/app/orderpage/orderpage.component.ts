import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Dish } from '../../shared/dish';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  totalPrice: number;
  totalDish: number;

  constructor(public dialogRef: MatDialogRef<OrderpageComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedDishes: any,
    private dishService: DishService) {
    this.selectedDishes = this.selectedDishes.dishes}

  ngOnInit() {
    this.totalPrice = 0
    for (let i = 0, len = this.selectedDishes.length; i < len; i++) {
      this.totalPrice += this.selectedDishes[i].price;
    }
    this.totalDish = this.selectedDishes.length;
  }

  placeOrder(dishes: Dish[]) {
    this.dishService.order(dishes)
  }




}
