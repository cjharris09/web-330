 /*--
============================================
; Title: Assignment 5.2
; Author: Chris Harris
; Date: 18 April 2021
; Description: class cartcomponent file.
;===========================================
*/
 
 class CartComponent extends HTMLElement {
    constructor(){
        super();
    }
//this is the injected HTML that displays the shopping card and the count of items in the cart
connectedCallback() {
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i>(<span id="cart-count"></span>)`;
}
}

customElements.define("cart-component", CartComponent);