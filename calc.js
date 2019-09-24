function resetCalc() {
    $('.one-rm-calculator input[name="95-one-rm"]').val('');
    $('.one-rm-calculator input[name="90-one-rm"]').val('');
    $('.one-rm-calculator input[name="85-one-rm"]').val('');
    $('.one-rm-calculator input[name="80-one-rm"]').val('');
    $('.one-rm-calculator input[name="75-one-rm"]').val('');
    $('.one-rm-calculator input[name="70-one-rm"]').val('');
    $('.one-rm-calculator input[name="65-one-rm"]').val('');
    $('.one-rm-calculator input[name="60-one-rm"]').val('');
    $('.one-rm-calculator input[name="55-one-rm"]').val('');
    $('.one-rm-calculator input[name="50-one-rm"]').val('');
}

$(document).ready(function() {

/* 1RM CALCULATOR */

$('.one-rm-calculator .calc-submit').click(function() {
var weight = parseFloat($('.one-rm-calculator input[name="weight"]').val());
var reps = parseFloat($('.one-rm-calculator .calc-dropdown').val());
var onerepmax = 0;

if (isNaN(weight)) {
    resetCalc();
    $('.calc-one-rm-result').html("Your One-Rep Max (one-rm): ?");
    $('.one-rm-calculator .calc-answer').removeClass('animated zoomOut').show(0).html('<span style="color: #a30000;">Please enter the weight you lifted.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}

else {
    $('.one-rm-calculator .calc-answer').addClass('animated zoomOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).css('visbility', 'hidden');
    });
    
    onerepmax = Math.round(weight / reps);
    $('.calc-one-rm-result').html("Your One-Rep Max (one-rm): " + onerepmax);
    
    $('.one-rm-calculator input[name="95-one-rm"]').val(Math.round(0.95 * onerepmax));
    $('.one-rm-calculator input[name="90-one-rm"]').val(Math.round(0.90 * onerepmax));
    $('.one-rm-calculator input[name="85-one-rm"]').val(Math.round(0.85 * onerepmax));
    $('.one-rm-calculator input[name="80-one-rm"]').val(Math.round(0.80 * onerepmax));
    $('.one-rm-calculator input[name="75-one-rm"]').val(Math.round(0.75 * onerepmax));
    $('.one-rm-calculator input[name="70-one-rm"]').val(Math.round(0.70 * onerepmax));
    $('.one-rm-calculator input[name="65-one-rm"]').val(Math.round(0.65 * onerepmax));
    $('.one-rm-calculator input[name="60-one-rm"]').val(Math.round(0.60 * onerepmax));
    $('.one-rm-calculator input[name="55-one-rm"]').val(Math.round(0.55 * onerepmax));
    $('.one-rm-calculator input[name="50-one-rm"]').val(Math.round(0.50 * onerepmax));
}
});

/* LEAN BODY MASS CALCULATOR */

$('.lbm-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.lbm-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.lbm-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.lbm-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.lbm-calculator input[name="weight"]').val("");
}
});

$('.lbm-calculator .calc-submit').click(function() {
var weight = parseInt($('.lbm-calculator input[name="weight"]').val());
var weightType = $('.lbm-calculator input[name="weight-system"]:checked').val();
var bodyfat = parseInt($('.lbm-calculator input[name="bodyfat"]').val()) / 100;
var lbm = 0;

if (isNaN(weight)) {
    $('.lbm-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

 else if (isNaN(bodyfat)) {
    $('.lbm-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your body fat percentage.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if (weightType == "kilos") {
        lbm = Math.round((1 - bodyfat) * weight * 10) / 10;
        $('.lbm-calculator .calc-answer').show(0).html('<div>Your Lean Body Mass: <span class="lbms extra-condensed-regular">' + lbm + ' kg</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }

    else {
        lbm = Math.round((1 - bodyfat) * weight * 10) / 10;
        $('.lbm-calculator .calc-answer').show(0).html('<div>Your Lean Body Mass: <span class="lbms extra-condensed-regular">' + lbm + ' lbs</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }
}
});

/* BMR CALCULATOR */

$('.bmr-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.bmr-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.bmr-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.bmr-calculator input[name="height-tens"]').val("");
    $('.bmr-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.bmr-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.bmr-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.bmr-calculator input[name="height-tens"]').val("");
    $('.bmr-calculator input[name="height-units"]').val("");
}
});

$('.bmr-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.bmr-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.bmr-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.bmr-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.bmr-calculator input[name="weight"]').val("");
}
});

$('.bmr-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.bmr-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.bmr-calculator input[name="height-units"]').val());
var heightType = $('.bmr-calculator input[name="height-system"]:checked').val();
        var weight = parseInt($('.bmr-calculator input[name="weight"]').val());
var weightType = $('.bmr-calculator input[name="weight-system"]:checked').val();
var age = parseInt($('.bmr-calculator input[name=age]').val());
var sex = $('.bmr-calculator input[name=sex]:checked').val();
        var bmr = '';

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.bmr-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        bmr = Math.round(66.5 + (weight * 13.75) + (height * 5.003) - (age * 6.755));
    } 
    else {
        bmr = Math.round(655 + (weight * 9.563) + (height * 1.850) - (age * 4.676));
    }

    $('.bmr-calculator .calc-answer').show(0).html('Your BMR: <span class="calories extra-condensed-regular">' + bmr + ' calories/day</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* RMR CALCULATOR */

$('.rmr-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.rmr-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.rmr-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.rmr-calculator input[name="height-tens"]').val("");
    $('.rmr-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.rmr-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.rmr-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.rmr-calculator input[name="height-tens"]').val("");
    $('.rmr-calculator input[name="height-units"]').val("");
}
});

$('.rmr-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.rmr-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.rmr-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.rmr-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.rmr-calculator input[name="weight"]').val("");
}
});

$('.rmr-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.rmr-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.rmr-calculator input[name="height-units"]').val());
var heightType = $('.rmr-calculator input[name="height-system"]:checked').val();
        var weight = parseInt($('.rmr-calculator input[name="weight"]').val());
var weightType = $('.rmr-calculator input[name="weight-system"]:checked').val();
var age = parseInt($('.rmr-calculator input[name=age]').val());
var sex = $('.rmr-calculator input[name=sex]:checked').val();
        var rmr = '';

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.rmr-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        rmr = Math.round((weight * 9.99) + (height * 6.25) - (age * 4.92) + 5);
    } 
    else {
        rmr = Math.round((weight * 9.99) + (height * 6.25) - (age * 4.92) + 161);
    }

    $('.rmr-calculator .calc-answer').show(0).html('Your RMR: <span class="calories extra-condensed-regular">' + rmr + ' calories/day</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* CREATINE CALCULATOR */

$('.creatine-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.creatine-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.creatine-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.creatine-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.creatine-calculator input[name="weight"]').val("");
}
});

$('.creatine-calculator .calc-submit').click(function() {
var weight = parseInt($('.creatine-calculator input[name="weight"]').val());
var weightType = $('.creatine-calculator input[name="weight-system"]:checked').val();
var creatine = 0;

if (isNaN(weight)) {
    $('.creatine-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if (weightType == "kilos") {
        weight = (weight * 2.20462);
    }

    if (weight < 120) creatine = 3;
    if (weight > 119 && weight < 201) creatine = 5;
    if (weight > 200) creatine = 8;

        $('.creatine-calculator .calc-answer').show(0).html('<div>Daily Creatine Intake: <span class="creatines extra-condensed-regular">' + creatine + ' g</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
}
});

/* WATER CALCULATOR */

$('.water-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.water-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.water-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.water-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.water-calculator input[name="weight"]').val("");
}
});

$('.water-calculator .calc-submit').click(function() {
var weight = parseInt($('.water-calculator input[name="weight"]').val());
var weightType = $('.water-calculator input[name="weight-system"]:checked').val();
var workout = $('.water-calculator input[name=activity]:checked').val();
var water = 0;

if (isNaN(weight)) {
    $('.water-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if (weightType == "kilos") {
        weight = (weight * 2.20462);
    }

    switch (workout) {
        case "L":
            water = Math.round(weight * 0.6 + 12);
            break;
        case "M":
            water = Math.round(weight * 0.6 + 24);
            break;
        case "V":
            water = Math.round(weight * 0.6 + 36);
            break;
     }

        $('.water-calculator .calc-answer').show(0).html('<div>Target Daily Water Intake: <span class="waters extra-condensed-regular">' + water + ' oz</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
}
});

/* CARB CALCULATOR */

$('.carb-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.carb-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.carb-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.carb-calculator input[name="height-tens"]').val("");
    $('.carb-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.carb-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.carb-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.carb-calculator input[name="height-tens"]').val("");
    $('.carb-calculator input[name="height-units"]').val("");
}
});

$('.carb-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.carb-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.carb-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.carb-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.carb-calculator input[name="weight"]').val("");
}
});

$('.carb-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.carb-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.carb-calculator input[name="height-units"]').val());
var heightType = $('.carb-calculator input[name="height-system"]:checked').val();
        var weight = parseInt($('.carb-calculator input[name="weight"]').val());
var weightType = $('.carb-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.carb-calculator input[name=age]').val());
var sex = $('.carb-calculator input[name=sex]:checked').val();
var job = $('.carb-calculator input[name=activity]:checked').val();
        var goal = $('.carb-calculator input[name=goal]:checked').val();
        var carbs = 0;

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.carb-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter numerical values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories =  Math.round(0.9 * calories);
            if (calories > 2000) calories =  Math.round(0.8 * calories);
            carbs = Math.round(0.40 * calories / 4);
            break;
        case "maintenance":
            carbs = Math.round(0.45 * calories / 4);
            break;
        case "gainz":
            calories += 500;
            carbs = Math.round(0.45 * calories / 4);
            break;
    }

    $('.carb-calculator .calc-answer').show(0).html('Target daily carb intake: <span class="calories extra-condensed-regular">' + carbs + ' g</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* PROTEIN CALCULATOR */

$('.protein-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.protein-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.protein-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.protein-calculator input[name="height-tens"]').val("");
    $('.protein-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.protein-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.protein-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.protein-calculator input[name="height-tens"]').val("");
    $('.protein-calculator input[name="height-units"]').val("");
}
});

$('.protein-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.protein-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.protein-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.protein-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.protein-calculator input[name="weight"]').val("");
}
});

$('.protein-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.protein-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.protein-calculator input[name="height-units"]').val());
var heightType = $('.protein-calculator input[name="height-system"]:checked').val();
        var weight = parseInt($('.protein-calculator input[name="weight"]').val());
var weightType = $('.protein-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.protein-calculator input[name=age]').val());
var sex = $('.protein-calculator input[name=sex]:checked').val();
var job = $('.protein-calculator input[name=activity]:checked').val();
        var goal = $('.protein-calculator input[name=goal]:checked').val();
        var protons = 0;

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.protein-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter numerical values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories =  Math.round(0.9 * calories);
            if (calories > 2000) calories =  Math.round(0.8 * calories);
            protons = Math.round(0.40 * calories / 4);
            break;
        case "maintenance":
            protons = Math.round(0.30 * calories / 4);
            break;
        case "gainz":
            calories += 500;
            protons = Math.round(0.30 * calories / 4);
            break;
    }

    $('.protein-calculator .calc-answer').show(0).html('Target daily protein intake: <span class="calories extra-condensed-regular">' + protons + ' g</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* FAT CALCULATOR */

$('.fat-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.fat-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.fat-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.fat-calculator input[name="height-tens"]').val("");
    $('.fat-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.fat-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.fat-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.fat-calculator input[name="height-tens"]').val("");
    $('.fat-calculator input[name="height-units"]').val("");
}
});

$('.fat-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.fat-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.fat-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.fat-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.fat-calculator input[name="weight"]').val("");
}
});

$('.fat-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.fat-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.fat-calculator input[name="height-units"]').val());
var heightType = $('.fat-calculator input[name="height-system"]:checked').val();
        var weight = parseInt($('.fat-calculator input[name="weight"]').val());
var weightType = $('.fat-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.fat-calculator input[name=age]').val());
var sex = $('.fat-calculator input[name=sex]:checked').val();
var job = $('.fat-calculator input[name=activity]:checked').val();
        var goal = $('.fat-calculator input[name=goal]:checked').val();
        var fats = 0;

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.fat-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter numerical values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories =  Math.round(0.9 * calories);
            if (calories > 2000) calories =  Math.round(0.8 * calories);
            fats = Math.round(0.20 * calories / 9);
            break;
        case "maintenance":
            fats = Math.round(0.25 * calories / 9);
            break;
        case "gainz":
            calories += 500;
            fats = Math.round(0.25 * calories / 9);
            break;
    }

    $('.fat-calculator .calc-answer').show(0).html('Target daily fat intake: <span class="calories extra-condensed-regular">' + fats + ' g</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* MACRONUTRIENTS CALCULATOR */

$('.macros-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.macros-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.macros-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.macros-calculator input[name="height-tens"]').val("");
    $('.macros-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.macros-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.macros-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.macros-calculator input[name="height-tens"]').val("");
    $('.macros-calculator input[name="height-units"]').val("");
}
});

$('.macros-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.macros-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.macros-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.macros-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.macros-calculator input[name="weight"]').val("");
}
});

$('.macros-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.macros-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.macros-calculator input[name="height-units"]').val());
var heightType = $('.macros-calculator input[name="height-system"]:checked').val();
var weight = parseInt($('.macros-calculator input[name="weight"]').val());
var weightType = $('.macros-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.macros-calculator input[name=age]').val());
var sex = $('.macros-calculator input[name=sex]:checked').val();
var job = $('.macros-calculator input[name=activity]:checked').val();
var goal = $('.macros-calculator input[name=goal]:checked').val();
var carbs = 0;
var protons = 0;
var fats = 0;

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.macros-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories =  Math.round(0.9 * calories);
            if (calories > 2000) calories =  Math.round(0.8 * calories);
            carbs = Math.round(0.40 * calories / 4);
            protons = Math.round(0.40 * calories / 4);
            fats = Math.round(0.20 * calories / 9);
            break;
        case "maintenance":
            carbs = Math.round(0.45 * calories / 4);
            protons = Math.round(0.30 * calories / 4);
            fats = Math.round(0.25 * calories / 9);
            break;
        case "gainz":
            calories += 500;
            carbs = Math.round(0.45 * calories / 4);
            protons = Math.round(0.30 * calories / 4);
            fats = Math.round(0.25 * calories / 9);
            break;
    }


    $('.macros-calculator .calc-answer').show(0).html('<div>Carbs: <span class="calories extra-condensed-regular">' + carbs + ' G per day.</span><br>Protein: <span class="calories extra-condensed-regular">' + protons + ' G per day.</span><br>Fats: <span class="calories extra-condensed-regular">' + fats + ' G per day.</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* CALORIE CALCULATOR */

$('.calorie-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.calorie-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.calorie-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.calorie-calculator input[name="height-tens"]').val("");
    $('.calorie-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.calorie-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.calorie-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.calorie-calculator input[name="height-tens"]').val("");
    $('.calorie-calculator input[name="height-units"]').val("");
}
});

$('.calorie-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.calorie-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.calorie-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.calorie-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.calorie-calculator input[name="weight"]').val("");
}
});

$('.calorie-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.calorie-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.calorie-calculator input[name="height-units"]').val());
var heightType = $('.calorie-calculator input[name="height-system"]:checked').val();
var weight = parseInt($('.calorie-calculator input[name="weight"]').val());
var weightType = $('.calorie-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.calorie-calculator input[name=age]').val());
var sex = $('.calorie-calculator input[name=sex]:checked').val();
var job = $('.calorie-calculator input[name=activity]:checked').val();
var goal = $('.calorie-calculator input[name=goal]:checked').val();

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.calorie-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories =  Math.round(0.9 * calories);
            if (calories > 2000) calories =  Math.round(0.8 * calories);
            break;
        case "maintenance":
            break;
        case "gainz":
            calories += 500;
            break;
    }


    $('.calorie-calculator .calc-answer').show(0).html('<div>Target  Daily Caloric Intake: <span class="extra-condensed-regular">' + calories + ' calories</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* BODYFAT CALCULATOR */

$('.bodyfat-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.bodyfat-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.bodyfat-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.bodyfat-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.bodyfat-calculator input[name="weight"]').val("");
}
});

$('.bodyfat-calculator .calc-submit').click(function() {
var skinfold1 = parseInt($('.bodyfat-calculator input[name="skinfold1"]').val());
var skinfold2 = parseInt($('.bodyfat-calculator input[name="skinfold2"]').val());
var skinfold3 = parseInt($('.bodyfat-calculator input[name="skinfold3"]').val());
var weight = parseInt($('.bodyfat-calculator input[name="weight"]').val());
var weightType = $('.bodyfat-calculator input[name="weight-system"]:checked').val();
var age = parseInt($('.bodyfat-calculator input[name=age]').val());
var sex = $('.bodyfat-calculator input[name=sex]:checked').val();

if (isNaN(weight)) {
    $('.bodyfat-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

 else if (isNaN(age)) {
    $('.bodyfat-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your age.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else if (isNaN(skinfold1) || isNaN(skinfold2) || isNaN(skinfold3)) {
    $('.bodyfat-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter a value for each skinfold measurement.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    var sum = (skinfold1 + skinfold2 + skinfold3);
    var bodyfat = 0;

    if (sex == "M") bodyfat = Math.round((495/(1.10938-(0.0008267*sum)+(0.0000016*sum*sum)-(0.0002574*age))-450) * 10) / 10;
    else bodyfat = Math.round((495/(1.089733-(0.0009245*sum)+(0.0000025*sum*sum)-(0.0000979*age))-450) * 10) / 10;
    
    var fm = Math.round(weight * (bodyfat / 100) * 10) / 10;
    var lm = weight - fm;
    var unit = 'lbs';
    if (weightType == 'kilos') unit = 'kg';
    
    $('.bodyfat-calculator .calc-answer').show(0).html('<div>Your Bodyfat Percentage: <span class="calories extra-condensed-regular">' + bodyfat + '</span>%<br><br>Your Fat Mass: <span class="calories extra-condensed-regular">' + fm + ' ' + unit + '</span><br><br>Your Lean Mass: <span class="calories extra-condensed-regular">' + lm + ' ' + unit + '</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

    /* TDEE CALCULATOR */

$('.tdee-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.tdee-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.tdee-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
    $('.tdee-calculator input[name="height-tens"]').val("");
    $('.tdee-calculator input[name="height-units"]').val("");
}

else if (heightUnits == "feet") {
    $('.tdee-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.tdee-calculator input[name="height-units"]').attr("placeholder", "Inches");
    $('.tdee-calculator input[name="height-tens"]').val("");
    $('.tdee-calculator input[name="height-units"]').val("");
}
});

$('.tdee-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.tdee-calculator input[name="weight"]').attr("placeholder", "Kilograms");
    $('.tdee-calculator input[name="weight"]').val("");
}

else if (weightUnits == "pounds") {
    $('.tdee-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.tdee-calculator input[name="weight"]').val("");
}
});

$('.tdee-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.tdee-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.tdee-calculator input[name="height-units"]').val());
var heightType = $('.tdee-calculator input[name="height-system"]:checked').val();
var weight = parseInt($('.tdee-calculator input[name="weight"]').val());
var weightType = $('.tdee-calculator input[name="weight-system"]:checked').val();
var tdee = 0;
var age = parseInt($('.tdee-calculator input[name=age]').val());
var sex = $('.tdee-calculator input[name=sex]:checked').val();
var job = $('.tdee-calculator input[name=activity]:checked').val();

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.tdee-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        tdee = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        tdee = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            tdee = Math.round(tdee * 1.1);
            break;
        case "M":
            tdee = Math.round(tdee * 1.3);
            break;
        case "V":
            tdee = Math.round(tdee * 1.5);
            break;
        case "E":
            tdee = Math.round(tdee * 1.7);
            break;
    }
    
    $('.tdee-calculator .calc-answer').show(0).html('<div>TDEE: <span class="extra-condensed-regular">' + tdee + ' calories</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

/* PRE-CONTEST CALCULATOR */

$('.preComp-calculator .calc-submit').click(function() {
var weight = parseInt($('.preComp-calculator input[name="weight"]').val());
var fat = parseInt($('.preComp-calculator input[name="fat"]').val());
var fatGoal = parseInt($('.preComp-calculator input[name="fatgoal"]').val());
var preComp = fat-fatGoal;

if (isNaN(weight)) {
    $('.preComp-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else if (isNaN(fat)) {
    $('.preComp-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your body fat percentage.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else if (isNaN(fatGoal)) {
    $('.preComp-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your body fat Goal percentage.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {

    if (preComp < 0){
        $('.preComp-calculator .calc-answer').show(0).html('<div>You need to enter a Percentage<span class="preComps extra-condensed-regular"></span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }

    else {
      preComp1 = Math.round(preComp*.01*weight/1.5);
      preComp2 = Math.round(preComp*.01*weight);
      $('.preComp-calculator .calc-answer').show(0).html('<div>You should start dieting <span class="preComps extra-condensed-regular">' + preComp1+ ' to ' +  preComp2 +' weeks before the contest</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }
}
});

/* CALORIES & MACRONUTRIENTS CALCULATOR */

$('.cals-and-macros-calculator input[name="height-system"]').click(function() {	
var heightUnits = $(this).val();

if (heightUnits == "meters") {
    $('.cals-and-macros-calculator input[name="height-tens"]').attr("placeholder", "Meters");
    $('.cals-and-macros-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
}

else if (heightUnits == "feet") {
    $('.cals-and-macros-calculator input[name="height-tens"]').attr("placeholder", "Feet");
    $('.cals-and-macros-calculator input[name="height-units"]').attr("placeholder", "Inches");
}
});

$('.cals-and-macros-calculator input[name="weight-system"]').click(function() {	
var weightUnits = $(this).val();

if (weightUnits == "kilos") {
    $('.cals-and-macros-calculator input[name="weight"]').attr("placeholder", "Kilograms");
}

else if (weightUnits == "pounds") {
    $('.cals-and-macros-calculator input[name="weight"]').attr("placeholder", "Pounds");
}
});

$('.cals-and-macros-calculator .calc-submit').click(function() {
var height = 0;
var heightTens = parseInt($('.cals-and-macros-calculator input[name="height-tens"]').val());
var heightUnits= parseInt($('.cals-and-macros-calculator input[name="height-units"]').val());
var heightType = $('.cals-and-macros-calculator input[name="height-system"]:checked').val();
var weight = parseInt($('.cals-and-macros-calculator input[name="weight"]').val());
var weightType = $('.cals-and-macros-calculator input[name="weight-system"]:checked').val();
var calories = 0;
var age = parseInt($('.cals-and-macros-calculator input[name=age]').val());
var sex = $('.cals-and-macros-calculator input[name=sex]:checked').val();
var job = $('.cals-and-macros-calculator input[name=activity]:checked').val();
var goal = $('.cals-and-macros-calculator input[name=goal]:checked').val();
var carbs = 0;
var protons = 0;
var fats = 0;

if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $('.cals-and-macros-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flipInX');
    });
}

else {
    if(isNaN(heightUnits)) {
        heightUnits = 0;
    }

    if (heightType == "feet") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    }	
    else {
        height = (heightTens * 100) + heightUnits;
    }
    
    if (weightType == "pounds") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
    } 
    else {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
    }

    switch (job) {
        case "L":
            calories = Math.round(calories * 1.1);
            break;
        case "M":
            calories = Math.round(calories * 1.3);
            break;
        case "V":
            calories = Math.round(calories * 1.5);
            break;
        case "E":
            calories = Math.round(calories * 1.7);
            break;
    }
    
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000) calories = Math.round(0.9 * calories);
            if (calories > 2000) calories = Math.round(0.8 * calories);
            carbs = Math.round(0.40 * calories / 4);
            protons = Math.round(0.40 * calories / 4);
            fats = Math.round(0.20 * calories / 9);
            break;
        case "maintenance":
            carbs = Math.round(0.45 * calories / 4);
            protons = Math.round(0.30 * calories / 4);
            fats = Math.round(0.25 * calories / 9);
            break;
        case "gainz":
            calories += 500;
            carbs = Math.round(0.45 * calories / 4);
            protons = Math.round(0.30 * calories / 4);
            fats = Math.round(0.25 * calories / 9);
            break;
    }


    $('.cals-and-macros-calculator .calc-answer').show(0).html('<div>Target  Daily Caloric Intake: <span class="extra-condensed-regular">' + calories + ' calories</span><br>Carbs: <span class="calories extra-condensed-regular">' + carbs + ' G per day.</span><br>Protein: <span class="calories extra-condensed-regular">' + protons + ' G per day.</span><br>Fats: <span class="calories extra-condensed-regular">' + fats + ' G per day.</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
    });
}
});

});
