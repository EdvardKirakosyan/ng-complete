import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ReciepeItemComponent } from './reciepe-item/reciepe-item.component';

@Component({
  selector: 'app-reciepe-list',
  standalone: true,
  imports: [ReciepeItemComponent],
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.scss',
})
export class ReciepeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simple res',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'
    ),
  ];
}
