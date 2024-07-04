import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://www.cookwithmanali.com/wp-content/uploads/2021/04/Smoked-Tandoori-Paneer-Sandwich-1014x1536.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://www.darngoodveggies.com/wp-content/uploads/2021/07/Veggie-Supreme-Pizza-21.jpg"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://www.dishbyrish.co.uk/wp-content/uploads/2023/08/DSC00019.jpg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://frommybowl.com/wp-content/uploads/2020/12/Chana-Kathi-Roll-1.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://kitchenmason.com/wp-content/uploads/2020/03/Millionaire-Brownie-Bars-262.jpg.webp"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://i2.wp.com/pbfingers.com/wp-content/uploads/2022/06/oreo-cheesecake-ice-cream-9.jpg"
    }
  ];

}
