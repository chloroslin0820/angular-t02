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
    },
    {
      id:7,
      foodName:"Chicken Biryani",
      foodDetails:"Aromatic basmati rice cooked with marinated chicken, saffron, and traditional Indian spices.",
      foodPrice:250,
      foodImg:"https://www.foodfashionparty.com/wp-content/uploads/2020/10/biryani-1-scaled.jpg"
    },
    {
      id:8,
      foodName:"Masala Dosa",
      foodDetails:"Crispy rice and lentil crepe filled with spiced potato filling, served with chutney and sambar.",
      foodPrice:180,
      foodImg:"https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-H2.jpg?w=600&ssl=1"
    },
    {
      id:9,
      foodName:"Butter Chicken",
      foodDetails:"Tender chicken pieces cooked in a rich tomato-based gravy with cream and butter.",
      foodPrice:300,
      foodImg:"https://littlespicejar.com/wp-content/uploads/2013/12/Finger-Lickin-Butter-Chicken-3.jpg"
    },
    {
      id:10,
      foodName:"Palak Paneer",
      foodDetails:"Fresh paneer cubes cooked in a creamy spinach gravy with traditional Indian spices.",
      foodPrice:220,
      foodImg:"https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-1.jpg"
    },
    {
      id:11,
      foodName:"Lamb Rogan Josh",
      foodDetails:"A flavorful Kashmiri dish made with tender lamb cooked in a rich and aromatic gravy.",
      foodPrice:350,
      foodImg:"https://beesbites.com.au/wp-content/uploads/2021/01/Lamb-Rogan-Josh-blog-1170x1755.jpg"
    },
    {
      id:12,
      foodName:"Gulab Jamun",
      foodDetails:"Deep-fried milk-based dumplings soaked in a sweet sugar syrup flavored with cardamom and rose water.",
      foodPrice:120,
      foodImg:"https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2023/11/Gulab-Jamun-Feature.jpg?w=800&ssl=1"
    },
  ];

}
