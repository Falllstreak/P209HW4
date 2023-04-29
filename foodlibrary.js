let Food = function (pFoodname, pCalories) {
  this.foodname = pFoodname;
  this.calories = parseInt(pCalories);
};

FoodArray = []; // defined an array to hold Food objects

// pre-loaded array with 2 objects
let newFood1 = new Food("Banana", 110);
FoodArray.push(newFood1);

let newFood2 = new Food("Hotdog", 150);
FoodArray.push(newFood2);
