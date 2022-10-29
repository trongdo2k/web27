let product1={id:1,loai:"oranges",name:"meat",price:20,img:"/img/product/product-1.jpg"};
let product2={id:2,loai:"oranges",name:"banana",price:5,img:"/img/product/product-2.jpg"};
let product3={id:3,loai:"oranges",name:"passion fruit",price:15,img:"/img/product/product-3.jpg"};
let product4={id:4,loai:"fresh-meat",name:"humberger",price:18,img:"/img/product/product-4.jpg"};
let product5={id:5,loai:"fresh-meat",name:"mango",price:16,img:"/img/product/product-5.jpg"};
let product6={id:6,loai:"fresh-meat",name:"watermelon",price:14,img:"/img/product/product-6.jpg"};
let product7={id:7,loai:"fresh-meat",name:"watermelon",price:12,img:"/img/product/product-7.jpg"};
let product8={id:8,loai:"vegetables",name:"applelk",price:9,img:"/img/product/product-8.jpg"};
let product9={id:9,loai:"vegetables",name:"milk",price:28,img:"/img/product/product-9.jpg"};
let product10={id:10,loai:"vegetables",name:"chicken",price:21,img:"/img/product/product-10.jpg"};
let product11={id:11,loai:"fastfood",name:"drink fruit",price:17,img:"/img/product/product-11.jpg"};
 let product12={id:12,loai:"fastfood",name:"vegetable",price:13,img:"/img/product/product-12.jpg"}
 let product = {
    product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12
}
for(let index in product)
{
    console.log(product[index].loai)
    document.getElementById("vegetabless").innerHTML+=`
    <div class="col-lg-3 col-md-4 col-sm-6 mix ${product[index].loai}">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="${product[index].img}">
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="bi bi-heart"></i></a></li>
                                <li><a href="#"><i class="bi bi-arrows-fullscreen"></i></a></li>
                                <li><a href="#"><i class="bi bi-bag-check"></i></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${product[index].name}</a></h6>
                            <h5>${product[index].price} $</h5>
                        </div>
                    </div>
                </div>
`
}