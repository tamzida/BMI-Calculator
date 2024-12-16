function BMICalculate()  {   /* function to perform calculation */
     
    /* Getting input variables */
        var weight = document.getElementById('weight').value;
        // console.log("weight"+weight);
        var heightft = document.getElementById('heightft').value;
         
        /* Checking for invalid input */
    
                if (weight == "" ){
                    alert("Please enter your weight!");
                    return;}
                if(heightft == "" ){
                    alert("Please enter your height.");
                    return;}
                if( weight < 0 || heightft <0 ){
                    alert("Your can not possibly have a negative weight and/or a negative height!");
                    return;}
                if(weight < 15) {
                    alert("Weighing " + weight  + " kilo, you must be a child, this is Adult BMI calculator!");
                    return;}
                if(weight > 650) {
                    alert("Do you really weigh " + weight + " Kilos?!");
                    return;}
                if (heightft < 3) {
                    alert("Standing " + heightft +" feet tall, you must be a child, this is Adult BMI calculator!");
                    return;}
                if (heightft > 10) {
                    alert("Are you really "  + heightft + " feet tall?!");
                    return;}        
             
      /* Performing calculations */
        var heightin = document.getElementById('heightin').value;
        var height = (heightft*12 + +heightin) * 0.0254;  // First converted height in inches then to meters
        // console.log("height "+height)
        document.getElementById("p").style.display = "block"; 
        BMI.innerHTML = Math.round(weight /(height*height));  //calculating BMI
   
        getDescription(BMI.innerHTML); 
        

      }
     
      window.onload = function () {
        document.getElementById("p").style.display = "none";
    };  
    /* Slider function to dynamically display inches portion of the height selected */
     function Slider()
        {heightin_op.innerHTML = document.getElementById('heightin').value;}
     
    /* Interpretation of BMI value */
     function getDescription(thisBMI)
     
        { var Description = "";
                if (thisBMI<18.5)
                    Description ="Underweight - eat like a caterpillar!";
                else if (thisBMI>=18.5 && thisBMI<=24.99)
                    Description ="Cheers! Your BMI Result: Normal. Keep it up!";
                else if (thisBMI>=25 && thisBMI<=29.99)
                    Description ="Oho! Your BMI Result: Overweight - Check your eating habit and exercise more often!";
                else if (thisBMI>=30 && thisBMI<=39.99)
                    Description ="Ops! Your BMI Result: Obese - Pay attention to your body and take help from experts!";
                else if (thisBMI>=40)
            Description ="Oh no! Your BMI Result: Morbidly Obese -  Do yourself a favor! Take some action in your life!!";
          else Description ="Please check your input values, BMI cannot be calculated.";
             
            var DESC = document.getElementById('DESC');
            DESC.innerHTML = Description;
        }
         
      /* Reset Button */
       function Clear()
        {
            document.getElementById('weight').value = "";
            document.getElementById('heightft').value = "";
            document.getElementById('heightin').value = "3";
            document.getElementById('BMI').value = "";
            document.getElementById('DESC').value = "";
            BMI.innerHTML = "";
            DESC.innerHTML = "";
            heightin_op.innerHTML = "3";
            document.getElementById("p").style.display = "none"; 
        }