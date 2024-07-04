import { Component } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: OrderDetailsService) { }
  foodData: any;
  ngOnInit() {
    this.foodData = this.service.foodDetails;
  }
}
