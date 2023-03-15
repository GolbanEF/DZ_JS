const products = [
    {
        id: 1,            
        name: "Носки",         
        description: "Носки мужские Nike, черные.",  
        sizes: [{1: "23-25", 2: "25-27", 3: "27-29", 4: "29-31"}],        
        price: 99,         
        available: 200
    },
    {
        id: 2,            
        name: "Кросовки",         
        description: "Кросовки Nike, красные",  
        sizes: [{1: "38-40", 2: "40-42", 3: "42-44", 4: "44-46"}],        
        price: 15000,         
        available: 10
    },
    {
        id: 3,            
        name: "Куртка",         
        description: "Куртка мужская Nike, серая.",  
        sizes: [{1: "L", 2: "XL", 3: "XXL", 4: "XXXL"}],        
        price: 8000,         
        available: 20
    },
    {
        id: 4,            
        name: "Костюм спортивный",         
        description: "Костюм спортивный мужской Nike, зелёный.",  
        sizes: [{1: "L", 2: "XL", 3: "XXL", 4: "XXXL"}],        
        price: 20000,         
        available: 30
    },
    {
        id: 5,            
        name: "Бейсболка",         
        description: "Бейсболка мужская Nike, белая.",  
        sizes: [{1: "S", 2: "M", 3: "L", 4: "XL"}],        
        price: 3000,         
        available: 500
    },
];

const basket = [
    {
        good: products[0],
        amount: 10
    },
    {
        good: products[1],
        amount: 1
    },
    {
        good: products[2],
        amount: 1
    }
]

// Функция добовления товара в корзину.
function basketAdd(g, b) {
            if (products[g] === g || b <= products.available){
                return g = products[g], b = amount
        }
        basket.push({good: products[g], amount: b})
}

// basketAdd(4, 10)
// console.log(basket)

// Функция удаление товара из корзины
function basketDelete(g) {
    if (products[g] === g){
        return g = products[g]
    }
    delete basket[g]
}

// basketDelete(4)

// console.log(basket)

// удаляем все из корзины.
function basketDelete() {
    basket.splice(0)
}
// basketDelete()

// подсчитываем количество товаров в корзине
const totalAmounts = basket.reduce(function(previous, items, index, array) {
    return items.amount + previous;
}, 0);


// подсчитываем общую стоимость товаров в корзине
const totalSum = basket.reduce(function(previous, items, index, array) {
    return items.good.price * items.amount + previous;
}, 0);


const totalBasket = []

function totalBasketAdd() {
    totalBasket.push ({totalAmount: totalAmounts, totalSumm: totalSum })
    
}

totalBasketAdd()

console.log(totalBasket)