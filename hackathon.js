//
/* PROTEIN CALCULATOR */

let form = document.querySelector("form");
console.log(form.elements[1].type);
// → number
console.log(form.elements.number.type);
// → number
console.log(form.elements.name.form == form);
// → true

function myFunction() {
    document.getElementById("form").submit();
}

