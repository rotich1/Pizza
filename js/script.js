$(document).ready(function () {
    $("#bg-order").addClass("order");
    $("#summary").hide();
    $(".order-form").hide();
    $("#bg-order").on('click', function () {
        $("#landing").hide();
        $(".order-form").show();
    });

    $("#pick").on('click', function () {
        $(".order-form").hide();
        validatePick();
    });

    $("#deliver").on('click', function () {
        validateDeliver();
    });
});

function Total(size, crust, topping, delivery) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery;
}


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
        alert("Select all items.");
    } else {
        $("#order-form").hide();
    }
    $("#itemQuantity").text(quantity);
    $("#itemSize").text(selectedSize);
    $("#itemCrust").text(selectedCrust);
    $("#itemTopping").text(selectedToppings);
    $("#totalValue").text("Kshs. " + totalCost);


}

function validateDeliver() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let selectedDelivery = parseFloat(document.getElementById("deliver").value);
    let quantity = document.getElementById("pizzaNumber").value;

    const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);
    // const deliver = new Total(selectedSize + selectedCrust + selectedToppings + delivery);

    var cost = deliver.size + deliver.crust + deliver.topping + deliver.delivery
    let totalCost = cost * quantity;
    if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
        alert("Select all items.");
    } else {
        return totalCost;
    }
    $("#itemQuantity").text(quantity);
    $("#itemSize").text(selectedSize);
    $("#itemCrust").text(selectedCrust);
    $("#itemTopping").text(selectedToppings);
    $("#totalValue").text("Kshs. " + totalCost);

}