import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../../shared/dish';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderpageComponent } from '../orderpage/orderpage.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDishes: Dish[];
  constructor(private dishService: DishService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.selectedDishes = this.dishes
  }

  addDish() {

  }


  openOrderPage() {
    this.dialog.open(OrderpageComponent, {
      data: {
        dishes: this.selectedDishes
      }
    })
  }

}
