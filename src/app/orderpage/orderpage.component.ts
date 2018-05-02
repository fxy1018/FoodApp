import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Dish } from '../../shared/dish';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderpageComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedDishes: any) {
    this.selectedDishes = this.selectedDishes.dishes}

  ngOnInit() {
  }

}
