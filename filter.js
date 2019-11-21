var shop = [
    {id:1,title:"Shyam Store",sales:1230,rate:12.3,qty:100},
    {id:2,title:"ABC Store",sales:2000,rate:10,qty:200},
    {id:3,title:"XYZ Coldstore",sales:4000,rate:20,qty:200}
] 




result = shop.filter(a=>a.sales>1000 &&  a.qty>100)
console.log(result)
