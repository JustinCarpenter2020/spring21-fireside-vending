import { ProxyState } from "../AppState.js";


class VendingService{
  buyItem(name) {
    let item = ProxyState.items.find(i => i.name == name)
    let money = ProxyState.money

    if(item.price <= money && item.quantity > 0){
      money -= item.price
      item.quantity--
      console.log(item)

      ProxyState.money = money
      let index = ProxyState.items.findIndex(i=> i.name == name)
      ProxyState.items[index] = item
      ProxyState.items = ProxyState.items
    } else {
      window.alert("Purchase failed")
    }
  }
  addMoney() {
    ProxyState.money += .25
    console.log(ProxyState.money)
  }

}




export const vendingService = new VendingService();