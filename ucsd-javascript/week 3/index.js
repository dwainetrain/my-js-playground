"use strict";
/* Hi Kristian, here's the MVP for ticket purchases at your ski resort.
Just a note, I went way out of scope for the exercise.
I wanted to challenge myself to make a version that updates with any change.
It ain't pretty, but it is functional */

// There's alot of repetitive code here, which may be a side-effect of DOM manipulation
// I'm open to pointers on how to refactor this, if you ever have the time
// No doubt, I'm violating some best practice by using values in the html for calculations

// Get price, quantity, tax and total elements
const selectedPrice = document.querySelector("#prices");
const selectedQuantity = document.querySelector("#tickets");
const taxAmount = document.querySelector("#tax");

// Set initial price
const basePrice = selectedPrice.querySelector("input[name=price]:checked")
  .value;
const baseQuantity = selectedQuantity.value;
getSubtotal(basePrice, baseQuantity);
getTaxAmount(taxAmount.checked);
getTotal();

// Listen for changes in price, and update subtotal accordingly
selectedPrice.addEventListener("change", event => {
  const baseQuantity = selectedQuantity.value;
  const priceChange = event.target.value;

  getSubtotal(priceChange, baseQuantity);
  getTaxAmount(taxAmount.checked);
  getTotal();
});

// Listen for changes in quantity, and update subtotal accordingly
selectedQuantity.addEventListener("change", event => {
  // const basePrice = document.querySelector('input[name=price]:checked').value;
  // Here I tried using a for loop instead of the method above
  let basePrice;
  for (let i = 0; i < selectedPrice.elements.length; i++) {
    if (selectedPrice.elements[i].checked) {
      basePrice = selectedPrice.elements[i].value;
    }
  }

  const quantityChange = event.target.value;

  getSubtotal(basePrice, quantityChange);
  getTaxAmount(taxAmount.checked);
  getTotal();
});

// Listen for changes in taxrate
taxAmount.addEventListener("change", event => {
  const basePrice = document.querySelector("input[name=price]:checked").value;
  const baseQuantity = selectedQuantity.value;

  getSubtotal(basePrice, baseQuantity);
  getTaxAmount(taxAmount.checked);
  getTotal();
});

// Calculate Subtotal
function getSubtotal(price, quantity) {
  const subtotalAmount = document.querySelector("#subtotal");
  const subtotal = +price * +quantity;
  subtotalAmount.textContent = subtotal;
}

// Calculate Tax
function getTaxAmount(checked) {
  let taxRate;
  if (checked) {
    taxRate = 0.06;
  } else {
    taxRate = 0.08;
  }
  const subtotalValue = document.querySelector("#subtotal").textContent;
  const taxAmount = document.querySelector("#taxAmount");
  const taxes = +subtotalValue * taxRate;
  taxAmount.textContent = taxes.toFixed(2);
}

// Calculate Total
function getTotal() {
  const subtotalValue = document.querySelector("#subtotal").textContent;
  const taxValue = document.querySelector("#taxAmount").textContent;
  const getTotal = document.querySelector("#total");
  const total = +subtotalValue + +taxValue;
  getTotal.textContent = total.toFixed(2);
}
