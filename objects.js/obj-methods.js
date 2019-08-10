let restaurant = {
  name: "haveli",
  guestcapacity: 75,
  guestcount: 0,
  checkavailability: function(partysize) {
    let seatleft = this.guestcapacity - this.guestcount;
    return partysize<=seatleft
  },
  seatparty:function(partysize){
    return this.guestcount=this.guestcount+partysize
  },
   removeparty:function(partsizeleaving){
    return this.guestcount=this.guestcount-partsizeleaving
}
}
restaurant.seatparty(72)
console.log('hello')
console.log(restaurant.checkavailability(4))
console.log('checking availability')
restaurant.removeparty(5)
console.log(restaurant.checkavailability(4))

