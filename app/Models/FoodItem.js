import { ProxyState } from "../AppState.js"



export default class FoodItem {
  constructor({name, price, quantity}){
    this.name = name,
    this.price = price,
    this.quantity = quantity
  }



  get Template(){
    return /*html*/ `
    <div class="card mr-4">
    <div class="card-body">
        <h4 class="card-title">${this.name} x ${this.quantity}</h4>
        <p class="card-text">${this.price}</p>
        <button name="" id="" class="btn btn-primary ${ProxyState.money >= this.price ? " " : "disabled"}"  onclick="app.vendingController.buyItem('${this.name}')"  role="button">Buy</button>
    </div>
</div>
    `
  }
}

// ternary on button class ${the conditional ? if its true : if its false}