//
/* PROTEIN CALCULATOR */

$('.protein-calculator input[name="height-system"]').click(function() {
  var heightUnits = $(this).val();
  if (heightUnits == "meters") {
    $('.protein-calculator input[name="height-tens"]').attr(
      "placeholder",
      "Meters"
    );
    $('.protein-calculator input[name="height-units"]').attr(
      "placeholder",
      "Centimeters"
    );
    $('.protein-calculator input[name="height-tens"]').val("");
    $('.protein-calculator input[name="height-units"]').val("");
  } else if (heightUnits == "feet") {
    $('.protein-calculator input[name="height-tens"]').attr(
      "placeholder",
      "Feet"
    );
    $('.protein-calculator input[name="height-units"]').attr(
      "placeholder",
      "Inches"
    );
    $('.protein-calculator input[name="height-tens"]').val("");
    $('.protein-calculator input[name="height-units"]').val("");
  }
});

$('.protein-calculator input[name="weight-system"]').click(function() {
  var weightUnits = $(this).val();
  if (weightUnits == "kilos") {
    $('.protein-calculator input[name="weight"]').attr(
      "placeholder",
      "Kilograms"
    );
    $('.protein-calculator input[name="weight"]').val("");
  } else if (weightUnits == "pounds") {
    $('.protein-calculator input[name="weight"]').attr("placeholder", "Pounds");
    $('.protein-calculator input[name="weight"]').val("");
  }
});

$(".protein-calculator .calc-submit").click(function() {
  var height = 0;
  var heightTens = parseInt(
    $('.protein-calculator input[name="height-tens"]').val()
  );
  var heightUnits = parseInt(
    $('.protein-calculator input[name="height-units"]').val()
  );
  var heightType = $(
    '.protein-calculator input[name="height-system"]:checked'
  ).val();
  var weight = parseInt($('.protein-calculator input[name="weight"]').val());
  var weightType = $(
    '.protein-calculator input[name="weight-system"]:checked'
  ).val();
  var calories = 0;
  var age = parseInt($(".protein-calculator input[name=age]").val());
  var sex = $(".protein-calculator input[name=sex]:checked").val();
  var job = $(".protein-calculator input[name=activity]:checked").val();
  var goal = $(".protein-calculator input[name=goal]:checked").val();
  var protons = 0;
  if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
    $(".protein-calculator .calc-answer")
      .show(0)
      .html(
        '<span style="color: #a30000;">Please enter numerical values for all the fields.</span>'
      )
      .addClass("animated flipInX")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("animated flipInX");
        }
      );
  } else {
    if (isNaN(heightUnits)) {
      heightUnits = 0;
    }
    if (heightType == "feet") {
      height = heightTens * 30.48 + heightUnits * 2.54;
    } else {
      height = heightTens * 100 + heightUnits;
    }

    if (weightType == "pounds") {
      weight = weight * 0.453592;
    }
    if (sex == "M") {
      calories = weight * 10 + height * 6.25 - age * 5 + 5;
    } else {
      calories = weight * 10 + height * 6.25 - age * 5 - 161;
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
        protons = Math.round((0.4 * calories) / 4);
        break;
      case "maintenance":
        protons = Math.round((0.3 * calories) / 4);
        break;
      case "gainz":
        calories += 500;
        protons = Math.round((0.3 * calories) / 4);
        break;
    }
    $(".protein-calculator .calc-answer")
      .show(0)
      .html(
        'Target daily protein intake: <span class="calories extra-condensed-regular">' +
          protons +
          " g</span>"
      )
      .addClass("animated flipInX")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("animated flipInX");
        }
      );
  }
});
