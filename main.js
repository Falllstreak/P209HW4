document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("foodsubmit").addEventListener("click", function () {
        console.log(FoodArray);

        let xFoodname = document.getElementById("foodInput").value;
        document.getElementById("calInput").value;
        let xCalories = parseInt(calInput.value);
        FoodArray.push(new Food(xFoodname, xCalories));
        // clear text box

        console.log(FoodArray);

        let totalCalories = 0;
        for (let i = 0; i < FoodArray.length; i++) {
            totalCalories += FoodArray[i].calories;
        }
        document.getElementById("totalOutput").value = totalCalories;
        document.getElementById("foodInput").value = "";
        document.getElementById("calInput").value = "";

    });


    // calorie calculation function call ?
    // document.getElementById("foodsubmit").addEventListener("click", function () {

    // });
});

// total calorie function:

// function totalCal() {
// }
