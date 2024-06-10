const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Stussy",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./img/stussyblk.jpg",
      },
      {
        code: "White",
        img: "./img/stussywhite.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Coziest",
    price: 90,
    colors: [
      {
        code: "black",
        img: "./img/blkcozi.jpg",
      },
      {
        code: "purple",
        img: "./img/purpcozi.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Bape",
    price: 80,
    colors: [
      {
        code: "black",
        img: "./img/blkbape.jpg",
      },
      {
        code: "white",
        img: "./img/whtbape.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Carhartt",
    price: 60,
    colors: [
      {
        code: "lightgray",
        img: "./img/grycar.jpg",
      },
      {
        code: "black",
        img: "./img/blkcar.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Nike",
    price: 100,
    colors: [
      {
        code: "red",
        img: "./img/retrored.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
   
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});