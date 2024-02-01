var value = document.getElementById("cart-value");
var cartbtn = document.getElementById("cart");

var btnadd = document.getElementsByClassName("button");

var Item = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function cardItemadded() {
  let cart = 0;
  for (index = 0; index < Item.length; index++) {
    cart = cart + Item[index].quantity;
  }
  value.innerHTML = cart;
}

for (let i = 0; i < btnadd.length; i++) {
  btnadd[i].onclick = (e) => {
    Item[i].quantity++;
    cardItemadded();
  };
}

var totaldoll = 0;
var totalcent = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < Item.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      Item[index].quantity * (Item[index].dollars * 100 + Item[index].cents);
  }
  totaldoll = Math.floor(totalPriceInCents / 100);
  totalcent = totalPriceInCents % 100;
}
var whatsappLink = "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";


  function link() {
    for (let index = 0; index < Item.length; index++) {
      if (Item[index].quantity != 0) {
        whatsappLink += "%0A" + Item[index].name + "%20" + Item[index].quantity;
      }
    }
    whatsappLink +=
      "%0A" + "Total%20Price:%20$" + totaldoll + "%20" + totalcent + "c";
  }

cartbtn.onclick = () => {
  updatePrice();

  link();
  window.open(whatsappLink, "_blank");

  for (let index = 0; index < Item.length; index++) {
    if (Item[index].quantity != 0) {
      console.log(
        "Item name: " +
          Item[index].name +
          " - Quantity: " +
          Item[index].quantity
      );
    }
  }

  console.log(
    "The total amount is " + totaldoll + "$ and " + totalcent + " cents"
  );
};