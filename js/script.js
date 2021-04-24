//BUSINESS LOGIC
$(document).ready(function () {
    $("#bg-order").addClass("order");
    $(".summary").hide();
    $(".receipt").hide();
    $(".order-form").hide();
    $(".print").hide();

    //The code below will hide the landing page and display the form to user
    $("#bg-order").on('click', function () {
        $("#landing").hide();
        $(".order-form").show();
    });

    //The code below executes customers inputs for those who are coming the pick their pizza
    $("#pick").on('click', function () {

        if (validatePick() != NaN) {
            validatePick();
        } else {
            $(".order-form").show();
            $(".summary").hide();
        }
    });

    //The code below executes customers inputs for those who need delivery their pizza

    $("#deliver").on('click', function () {

        if (validateDeliver() != NaN) {
            validateDeliver();
        } else {
            $(".order-form").show();
            $(".summary").hide();
        }
    });

    //The code below will show a receipt of what customer has ordered

    $(".checkOut").on('click', function () {
        $(".order-form").show();
        $(".receipt").show();
        $(".summary").hide();
        $(".print").show();
        checkOut();
    });

    $(".print").on('click', function () {
        window.print();
    });

    $("p.homeLink").on("click", function () {
        location.reload();
    });

});

//A function constructor
function Total(size, crust, topping, delivery) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery;
}

//A function that executes when customers selects pick option
function validatePick() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let quantity = document.getElementById("pizzaNumber").value;
    let selectedDelivery = parseFloat(document.getElementById("pick").value);

    const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);
    // const deliver = new Total(selectedSize + selectedCrust + selectedToppings + delivery);

    var cost = pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery
    let totalCost = cost * quantity;

    if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
        alert(noInput);
    } else {
        $(".order-form").hide();
        $(".summary").show();
        document.getElementById("itemQuantity").innerHTML = quantity;
        document.getElementById("itemSize").innerHTML = selectedSize;
        document.getElementById("itemCrust").innerHTML = selectedCrust;
        document.getElementById("totalValue").innerHTML = totalCost;

    }

}

//A function that executes when customers selects delivery option
function validateDeliver() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let selectedDelivery = parseFloat(document.getElementById("deliver").value);
    let quantity = document.getElementById("pizzaNumber").value;

    const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

    var cost = deliver.size + deliver.crust + deliver.topping + deliver.delivery
    let totalCost = cost * quantity;
    if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
        alert(noInput);
    } else {
        confirm(charge);
        if (charge) {
            $(".order-form").hide();
            $(".summary").show();
        } else {
            return false;
        }

    }
    if (charge) {
        $("#itemQuantity").text(quantity);
        $("#itemSize").text(selectedSize);
        $("#itemCrust").text(selectedCrust);
        $("#itemTopping").text(selectedToppings);
        $("#totalValue").text(totalCost);
    }
}

//This code passes data to receipt table
function checkOut() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let selectedDelivery = parseFloat(document.getElementById("deliver").value);
    let quantity = document.getElementById("pizzaNumber").value;
    let total = (selectedCrust + selectedToppings + selectedSize + selectedDelivery) * quantity;
    $("#quantity").text(quantity);
    $("#size").text(selectedSize);
    $("#crust").text(selectedCrust);
    $("#topping").text(selectedToppings);
    $("#value").text(total);

}



//USER INTERFACE LOGIC
var charge = "There will be an additional charge for transport";
var noInput = "Kindly provide all fields";
var confirmTransport = "Are you sure you don't need delivery?";