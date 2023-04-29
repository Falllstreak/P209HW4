document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("foodsubmit").addEventListener("click", function () {
        console.log(FoodArray);

        let xFoodname = document.getElementById("foodInput").value;        
        let xCalories = document.getElementById("calInput").value;
        FoodArray.push(new Food(xFoodname, xCalories));

        console.log(FoodArray);

        let totalCalories = 0;
        for (let i = 0; i < FoodArray.length; i++) {
            totalCalories += FoodArray[i].calories;
        }
        // show total calories, clear text boxes
        document.getElementById("totalOutput").value = totalCalories;
        document.getElementById("foodInput").value = "";
        document.getElementById("calInput").value = "";

    });

});
