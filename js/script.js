$(document).ready(function () {
    $("h4.bg-order").addClass("order");
    $(".order-form").hide();
    $("h4.bg-order").on('click', function () {
        $(".landing").hide();
        $(".order-form").show();
    });
});

function Total(size, crust, topping, delivery, quantity) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery;
    this.quantity = quantity;
}

function pick() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let quantity = parseFloat(document.getElementById("pizzaNumber").value);
    let delivery = document.getElementById("deliver").value;

    const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, delivery);
    // const deliver = new Total(selectedSize + selectedCrust + selectedToppings + selectedDelivery);

    var cost = (pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery) * pickDelivery.quantity;
    var totalCost = (quantity * cost);
    alert(typeof(cost1));
}