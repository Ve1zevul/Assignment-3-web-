function calculatePrice() {
    let basePrice = 100;

    var education = parseFloat(document.getElementById("education").value);
    basePrice *= education;

    var networth = parseFloat(document.getElementById("networth").value);
    basePrice *= networth;

    var caste = parseInt(document.getElementById("caste").value);
    basePrice += caste;

    
    if (document.getElementById("skill1").checked) {
        basePrice = basePrice + 10;
    }
    if (document.getElementById("skill2").checked) {
        basePrice = basePrice + 20;
    }
    if (document.getElementById("skill3").checked) {
        basePrice = basePrice + 15;
    }
    if (skill4 = document.getElementById("skill4").checked) {
        basePrice = basePrice + 10;
    }

    
    var age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    basePrice *= age;


    if (document.getElementById("reputation1").checked) {
        basePrice *= 0.85;
    }
    if (document.getElementById("reputation2").checked) {
        basePrice *= 0.9;
    }
    if (document.getElementById("reputation3").checked) {
        basePrice -= 20;
    }

    document.getElementById("finalPrice").textContent = basePrice.toFixed(2);
}
