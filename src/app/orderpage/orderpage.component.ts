import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Dish } from '../../shared/dish';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  totalPrice: number;
  totalDish: number;

  constructor(public dialogRef: MatDialogRef<OrderpageComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedDishes: any) {
    this.selectedDishes = this.selectedDishes.dishes}

  ngOnInit() {
    this.totalPrice = 0
    for (let i = 0, len = this.selectedDishes.length; i < len; i++) {
      this.totalPrice += this.selectedDishes[i].price;
    }
    this.totalDish = this.selectedDishes.length;


  }

}
