import { Component } from '@angular/core';
import { ReciepeItemComponent } from './reciepe-item/reciepe-item.component';

@Component({
  selector: 'app-reciepe-list',
  standalone: true,
  imports: [ReciepeItemComponent],
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.scss',
})
export class ReciepeListComponent {}
