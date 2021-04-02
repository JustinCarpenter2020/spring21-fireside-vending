import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _drawMoney(){
document.getElementById('currency').innerHTML = ProxyState.money.toString()
}

function _draw(){
let items = ProxyState.items
let template = ''
items.forEach(i => template += i.Template)
document.getElementById('items').innerHTML = template
}


export default class VendingController{
constructor(){
  ProxyState.on('money', _drawMoney)
  // draw items on money so buttons on items update
  ProxyState.on('money', _draw)
  ProxyState.on('items', _draw)
  _draw()
}


  addMoney(){
    vendingService.addMoney()
  }

  buyItem(name){
    vendingService.buyItem(name)
  }
}