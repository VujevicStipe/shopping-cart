allTotal = 0;

function addToCart(element) {

    let mainEl = element.closest('.item');
    let name = mainEl.querySelector('.item-content h2').innerHTML;
    let price = parseInt(mainEl.querySelector('.item-content h3').innerHTML.substring(1));
    let quantity = parseInt(mainEl.querySelector('.item-actions input').value);
    let cartItem = document.querySelector('.cart-items');
    let cartTotal = document.querySelector('.cart-total');

    if (quantity > 0) {
        let total = price * quantity;
        allTotal += total;
        cartItem.innerHTML += `<div class="single-cart-item">
                                <h2>${name}</h2>
                                <h3>${price} x ${quantity} = $<span>${total}</span></h3>
                                <button onClick="removeFromCart(this)">Remove</button>
                            </div>`;

        element.innerHTML = 'Added';
        element.setAttribute('disabled', 'true');
        cartTotal.innerHTML = `Total is: <span>$${allTotal}</span>`;

    } else {
        alert('Quantity must bi greater than 0');
    }
};

function removeFromCart(element) {

    let mainEl = element.closest('.single-cart-item');
    let cartTotal = document.querySelector('.cart-total');
    let price = parseInt(mainEl.querySelector('span').innerHTML);
    let name = mainEl.querySelector('h2').innerHTML;
    let items = document.querySelectorAll('.item');

    allTotal -= price;

    cartTotal.innerHTML = `Total is: <span>$${allTotal}</span>`;
    mainEl.remove();

    items.forEach(function (item) {
        let itemName = item.querySelector('.item-content h2').innerHTML;
        let btn = item.querySelector('button');
        let input = item.querySelector('input');
        
        if(itemName === name) {
            btn.innerHTML = 'Add to cart';
            btn.removeAttribute('disabled');
            input.value = 0;
        }
    });  
}