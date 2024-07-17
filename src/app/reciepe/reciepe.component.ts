import { Component } from '@angular/core';
import { ReciepeDetailComponent } from './reciepe-detail/reciepe-detail.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';

@Component({
  selector: 'app-reciepe',
  standalone: true,
  imports: [ReciepeListComponent, ReciepeDetailComponent],
  templateUrl: './reciepe.component.html',
  styleUrl: './reciepe.component.scss',
})
export class ReciepeComponent {}
