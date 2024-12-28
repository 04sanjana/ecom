import { Component, OnInit } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrected here
})
export class HomeComponent implements OnInit { // Added OnInit interface

  data: any; // Consider defining a specific type for better maintainability

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe((res: any) => { // Replace `any` with an appropriate interface if possible
      this.data = res.products;
      console.log(this.data);
    });
  }
}
