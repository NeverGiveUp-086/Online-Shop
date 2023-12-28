const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Presto",
    category: "Clothing and Shoes",
    price: 55,
    description: "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    inStock: true,
    popular: true,
    imageURL: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/wokkcny4zbhvzobfwc7i/air-presto-womens-shoe-89Tqz1nG.jpg"
  },
  {
    id: 2,
    name: "Casio F-91W-1XY",
    category: "Jewelry and Watches",
    price: 101,
    description: "Shaped in an iconic casio design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",
    inStock: false,

    popular: false,
    imageURL: "http://thewire.in/wp-content/uploads/2015/08/Casio_F-91W_82T38575.jpg"
  },
  {
    id: 3,
    name: "Seiko Silvertone Black Dial Solar Calendar Watch",
    category: "Jewelry and Watches",
    price: 200,
    description:
      '* 36 mm stainless steel case with mineral dial window\n' +
      '* Automatic self-wind movement with analog display\n' +
      '* Stainless steel bracelet with fold-over clasp',
    inStock: false,
    popular: false,
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/81XUKQex4nL._UY445_.jpg"
  },
  {
    id: 4,
    name: "Harry Potter",
    category: "Books",
    price: 102,
    description: "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia"+
     "and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in"+
     "a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life"+
     "with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is"+
     "until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",
    inStock: false,

    popular: true,
    imageURL: "https://m.media-amazon.com/images/I/91ocU8970hL.jpg"
  },
  {
    id: 5,
    name: "DELL SE2717HR",
    category: "Computers",
    price: 102,
    description:
      '* Amazing angles: Share consistent high-color fidelity with In-Plane Switching (IPS) technology across a 27-inch diagonal screen. A stunning vantage point for everyone, from almost anywhere\n' +
      '* Distinctively modern and accessible: The contemporary thin profile is enhanced by the modern white and silver colors.The open wedge stand design provides convenient access to VGA and dual HDMI ports',
    inStock: true,

    popular: true,
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/71kgK6fAvtL._SL1500_.jpg"
  },
  {
    id: 6,
    name: "Table Lamp USB",
    category: "Home",
    price: 200,
    description:
      '* Funtinal Table Lamp--Be tried of getting up to find a socket to charge your phone when you lay on the bed? Get Seealle USB bedside table lamp will be a smart choice,the base of this table lamp contains a USB charging port, convient to charge your mobile phones, tablets, kindle readers, laptops, and other electronic devices.',
    inStock: true,

    popular: true,
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/71kJUODeaKL._SL1500_.jpg"
  },
  {
    id: 7,
    name: "Swatch Skin",
    category: "Jewelry and Watches",
    price: 200,
    description: "",
    inStock: false,
    popular: false,
    imageURL: "https://static.swatch.com/images/product/SVUN105/sa000/SVUN105_sa000_sr8.jpg"
  },
  {
    id: 8,
    name: "Adidas Gazelle",
    category: "Clothing and Shoes",
    price: 55,
    description: "",
    inStock: false,
    popular: false,
    imageURL: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd68ef62fee54fbc961eae93004db0e2_9366/gazelle-shoes.jpg"
  },
  {
    id: 9,
    name: "Bluetooth Keyboard, Vive Comb Rechargeable",
    category: "Computers",
    price: 55,
    description: "",
    inStock: false,
    popular: false,
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/71qNNgYCHYL._SL1500_.jpg"
  },
]

/* Available categories */
const categories = ['All categories', 'Clothing and Shoes', 'Books', 'Jewelry and Watches', 'Computers', "Home"]

/* 
 * This function generates menu items.
 * Some are hardcoded, some based on categories.
 */
const generateMenuItems = () => {
  let menuItems = [
    { type: "title", name: "MAIN", id: 0 },
    { type: "item", name: "Home page", url: "/", parent: "MAIN", id: 1},
    { type: "item", name: "About us", url: "/about", parent: "MAIN", id: 2 },
    { type: "title", name: "CATEGORIES", id: 3 },
  ];

  menuItems = menuItems.concat(categories.map((x, i) => {
    return {
      name: x, url: "/search/?directCategory=true&category=" + x, id: 4 + i , type: "item", parent: "CATEGORIES"
    }
  }))

  return menuItems;
}

let menuItems = generateMenuItems();

export { sampleProducts, menuItems, categories }