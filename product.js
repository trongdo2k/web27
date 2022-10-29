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
let product_cart={
    product_cart1:{product1,quantity:2},
    product_cart2:{product8,quantity:3},
    product_cart3:{product3,quantity:2},
    
}
let sum=0;
for(let index in product_cart)
{
    let tg=product_cart[index];
    
    for(let indexz in tg)
    {
        if(tg[indexz].img==undefined){
            continue;
        }
        else
        {
            
            document.getElementById('prductz').innerHTML+=`
             <tr>
             <td class="shoping__cart__item">
                                        <img src="${tg[indexz].img}" alt="">
                                        <h5>${tg[indexz].name}</h5>
                                    </td>
                                    <td class="shoping__cart__price">
                                    ${tg[indexz].price} $
                                    </td>
                                    <td class="shoping__cart__quantity">
                                        <div class="quantity">
                                            <div  " class="pro-qty">
                                                <button style="background-color: #f5f5f5;" id="down${tg[indexz].id}">-</button>
                                                <input id="${tg[indexz].id}nn"  type="text" value="${tg.quantity}">
                                                <button style="background-color: #f5f5f5;" id="up${tg[indexz].id}">+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td id="${tg[indexz].id}cc" class="shoping__cart__total">
                                    ${tg[indexz].price* tg.quantity} $
                                    </td>
                                    <td >
                                        <button id="${tg[indexz].id}dl" style="color:red;background:white" type="close">X</button>
                                    </td>
             </tr>                       
            `
        }
        sum+=tg[indexz].price* tg.quantity;
        document.getElementById('sum').innerHTML=sum;
    }
    
}

for(let index in product_cart)
{
    let tg=product_cart[index];
    
    for(let indexz in tg)
    {
        
        let btup=document.getElementById(`up${tg[indexz].id}`);
        let btdown=document.getElementById(`down${tg[indexz].id}`);
        let btdelete=document.getElementById(`${tg[indexz].id}dl`);
        
        if(btup==null){
            continue
        }
        else{
            btup.onclick=function(){
                tg.quantity+=1;
                document.getElementById(`${tg[indexz].id}nn`).value=tg.quantity;
                document.getElementById(`${tg[indexz].id}cc`).innerHTML=`${tg[indexz].price* tg.quantity} $`;
                sum+=tg[indexz].price;
                document.getElementById('sum').innerHTML=sum;
            }
            
        }
        if(btdown==null){
            continue
        }
        else{
            btdown.onclick=function(){
                if(tg.quantity>1)
                            {
                                tg.quantity-=1;
                                document.getElementById(`${tg[indexz].id}nn`).value=tg.quantity;
                                document.getElementById(`${tg[indexz].id}cc`).innerHTML=`${tg[indexz].price* tg.quantity} $`;
                                sum-=tg[indexz].price;
                                document.getElementById('sum').innerHTML=sum;
                            }
                        
                    }
        }
        
        
        
       
    }
        
}







                                    


    
