// javascript coding starts here
const data = [
  {
    id: 1,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/watch1.jpg",
    price: 100,
    cat: "watch",
  },
  {
    id: 2,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/watch2.jpg",
    price: 250,
    cat: "watch",
  },
  {
    id: 3,
    name: "Denim Shoes",
    imgUrl: "assets/watch3.jpg",
    price: 300,
    cat: "Shoes",
  },
  {
    id: 4,
    name: "Denim Shoes",
    imgUrl: "assets/watch4.jpg",
    price: 350,
    cat: "Shoes",
  },
  {
    id: 5,
    name: "Liked Jeans",
    imgUrl: "assets/watch5.jpg",
    price: 400,
    cat: "Jeans",
  },
  {
    id: 6,
    name: "Liked Jeans",
    imgUrl: "assets/jeans1.jpg",
    price: 450,
    cat: "Jeans",
  },
  {
    id: 7,
    name: "Pure Leather Jacket",
    imgUrl: "assets/watch7.jpg",
    price: 500,
    cat: "Jacket",
  },
  {
    id: 8,
    name: "Unique watch item",
    imgUrl: "assets/watch8.jpg",
    price: 550,
    cat: "Watch",
  },
  {
    id: 9,
    name: "Summer Sunglasses",
    imgUrl: "assets/watch9.jpg",
    price: 600,
    cat: "Watch",
  },
  {
    id: 10,
    name: "Summer Sunglasses",
    imgUrl: "assets/sunglass1.jpg",
    price: 650,
    cat: "Sunglass",
  },
  {
    id: 11,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/sunglass2.jpg",
    price: 700,
    cat: "Sunglass",
  },
  {
    id: 12,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/jeans1.jpg",
    price: 750,
    cat: "Jeans",
  },
  {
    id: 13,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/jacket1.jpg",
    price: 800,
    cat: "Jacket",
  },
  {
    id: 14,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/bag1.jpg",
    price: 850,
    cat: "Bag",
  },
  {
    id: 15,
    name: "Stylish Rolex Watch",
    imgUrl: "assets/shoes1.jpg",
    price: 900,
    cat: "Shoes",
  },
    {
    id: 16,
    name: "Men's Shoes",
    imgUrl: "assets/shoes2.jpg",
    price: 920,
    cat: "Shoes",
  },
];
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts=(filteredProducts)=>{
productsContainer.innerHTML = filteredProducts.map(
  (product) =>
    `
<div class="product"> 
<img
src=${product.imgUrl}
alt=""
/>
<span class="name">${product.name}</span>
<span class="priceText">$${product.price}</span>
</div>
`
).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup",(e)=>{
const value=e.target.value.toLowerCase();

if(value){
displayProducts(data.filter(item=>
  item.name.toLowerCase().indexOf(value)!==-1))
}else{
    displayProducts(data);
}
});

const setCategories=()=>{
const allCats=data.map((item)=>item.cat);
const categories=[
    "All",
    ...allCats.filter((item,i)=>{
        return allCats.indexOf(item)===i;
    }),
];

categoriesContainer.innerHTML=categories.map(cat=>
`<span class="cat">${cat}</span>`
).join("");

categoriesContainer.addEventListener("click",(e)=>{
    const selectedCat=e.target.textContent;

    selectedCat==="All"
    ?displayProducts(data)
    :displayProducts(data.filter((item)=>item.cat===selectedCat));
});
};
const setPrices=()=>{
  const priceList=data.map((item)=>item.price);
  const minPrice=Math.min(...priceList)
  const maxPrice=Math.max(...priceList)
  priceRange.min=minPrice;
  priceRange.max=maxPrice;
  priceRange.value=maxPrice;
  priceValue.textContent="$"+maxPrice;

  priceRange.addEventListener("input",(e)=>{
    priceValue.textContent="$"+e.target.value;
    displayProducts(data.filter((item)=>item.price<=e.target.value));
  });
};
setCategories();
setPrices();