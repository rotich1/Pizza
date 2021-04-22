$(document).ready(function () {
    $("h4.bg-order").addClass("order");
    $(".order-form").hide();
    $("h4.bg-order").on('click', function () {
        $(".landing").hide();
        $(".order-form").show();
    });
});

function Total(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}


function pick() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);

    const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, 0);
    // const deliver = new Total(selectedSize + selectedCrust + selectedToppings + selectedDelivery);

    var cost = pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery
    alert(cost);
}