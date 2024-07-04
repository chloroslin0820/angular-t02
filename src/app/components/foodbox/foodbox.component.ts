import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foodbox',
  templateUrl: './foodbox.component.html',
  styleUrl: './foodbox.component.css'
})
export class FoodboxComponent {
  @Input() foodData: any;
  @Input() displayCondition: boolean = true;
}
