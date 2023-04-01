class Good {
    constructor(id, name, descrition, size, price, available) {
        this.id = id;
        this.name = name;
        this.descrition = descrition;
        this.size = size;
        this.price = price;
        this.available = available;
    };
    setAvailable(value) {
        this.available = value;
    }
}

class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrisce = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        let arr = this.#goods.filter(good => good.available && good.name.match(this.filter));
        let result = [];

        if (this.sortPrisce && !this.sortDir) {
            result = arr.sort((product1, product2) => product2.price-product1.price);
            return result;
        } else if (this.sortPrisce && this.sortDir) {
            result = arr.sort((product1, product2) => product1.price-product2.price);
            return result;
        } else {
            return arr;
        }
    }
    add (id, name, descrition, size, price, available) {
        let product = new Good(id, name, descrition, size, price, available);
        this.#goods.push(product)
    }
    remove(id) {
        for (let i = 0; i < this.#goods.length; i++) {
            if (id === this.#goods[i]['id']) {
                this.#goods.splice(i, 1)
            }
        }
    }
}

class BasketGood extends Good {
    constructor(id, name, descrition, size, price, available, amount) {
        super(id, name, descrition, size, price, available);
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }

    get totalAmount() {
        let result = 0;
        result = this.goods.reduce(function(count, good) {
            return count += good.amount;
        }, 0);
        return result;
    }

    get totalSum() {
        let sum = 0;
        this.goods.forEach((good) => sum += good.price * good.amount);
        return sum;
    }

    add (good, amount) {
        const idx = this.goods.findIndex(product => product.id == good.id);
        if (idx === -1 && amount > 0) {
            let product = new BasketGood(good.id, good.name, good. descrition, good.size, good.price, good.available,
                amount);
            this.goods.push(product);
        } else if (idx >=0 && amount > 0) {
            this.goods[idx].amount += amount;
        }
    }

    remove(good, amount) {
        const idx = this.goods.findIndex(product => product.id == good.id);

        if (this.goods.length === 0){
            console.log('Корзина пуста.')
        } else if (idx === -1) {
            console.log('Такого товара нет.')
        } else if (this.goods[idx].amount >= amount) {
            this.goods[idx].amount -= amount;
            if (this.goods[idx].amount === 0) {
                this.goods.splice(idx, 1);
            }
        } else if (this.goods[idx].amount < amount) {
            console.log('Ошибка: неправельно введен параметр количеста. Попробуйте ещё раз.')
        }
    }

    clear() {
        this.goods.length = 0; 
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true);
    }
}

let goodlist = new GoodsList(/Nike/i, false, false);

goodlist.add (
    1,            
    "Носки Nike",         
    "Носки мужские Nike, черные.",  
    ["23-25", "25-27", "27-29", "29-31"],        
    99,         
    true
);

goodlist.add(
    2,            
    "Кросовки Nike",         
    "Кросовки Nike, красные",  
    ["38-40","40-42","42-44","44-46"],        
    15000,         
    true
);

goodlist.add(
    3,            
    "Куртка Nike",         
    "Куртка мужская Nike, серая.",  
    ["L", "XL", "XXL", "XXXL"],        
    8000,         
    false
);

goodlist.add(
    4,            
    "Костюм спортивный Nike",         
    "Костюм спортивный мужской Nike, зелёный.",  
    ["L", "XL", "XXL", "XXXL"],        
    20000,         
    true
);

goodlist.add(
    5,            
    "Бейсболка Nike",         
    "Бейсболка мужская Nike, белая.",  
    ["S", "M", "L", "XL"],        
    3000,         
    false
);

goodlist.add(
    6,            
    "Бейсболка Puma",         
    "Бейсболка мужская Puma, белая.",  
    ["S", "M", "L", "XL"],        
    2000,         
    true
);

goodlist.add(
    7,            
    "Костюм спортивный Puma",         
    "Костюм спортивный мужской Puma, зелёный.",  
    ["L", "XL", "XXL", "XXXL"],        
    10000,         
    true
);

console.log(goodlist.list)


let good1 = new Good(
    1,            
    "Носки Nike",         
    "Носки мужские Nike, черные.",  
    ["23-25", "25-27", "27-29", "29-31"],        
    99,         
    true
);

let good2 = new Good(
    2,            
    "Кросовки Nike",         
    "Кросовки Nike, красные",  
    ["38-40","40-42","42-44","44-46"],        
    15000,         
    true
);

let good3 = new Good(
    3,            
    "Куртка Nike",         
    "Куртка мужская Nike, серая.",  
    ["L", "XL", "XXL", "XXXL"],        
    8000,         
    false
);

let good4 = new Good(
    4,            
    "Костюм спортивный Nike",         
    "Костюм спортивный мужской Nike, зелёный.",  
    ["L", "XL", "XXL", "XXXL"],        
    20000,         
    true
);

let good5 = new Good(
    5,            
    "Бейсболка Nike",         
    "Бейсболка мужская Nike, белая.",  
    ["S", "M", "L", "XL"],        
    3000,         
    false
);

let good6 = new Good(
    6,            
    "Бейсболка Puma",         
    "Бейсболка мужская Puma, белая.",  
    ["S", "M", "L", "XL"],        
    2000,         
    true
);

let good7 = new Good(
    7,            
    "Костюм спортивный Puma",         
    "Костюм спортивный мужской Puma, зелёный.",  
    ["L", "XL", "XXL", "XXXL"],        
    10000,         
    true
);

let basket = new Basket();

// good1.available = false;

basket.add(good1, -5);
basket.add(good1, 5);

basket.add(good2, 0);
basket.add(good2, 10);

basket.add(good3, 15);
basket.add(good3, 15);

basket.add(good7, 7);
basket.add(good7, 5);

// console.log(basket);

// basket.removeUnavailable();
// console.log(basket);

// basket.remove(good1, 5);
// basket.remove(good2, 10);
// basket.remove(good3, 30);
// console.log(basket);

// console.log(basket.totalAmount);
// console.log(basket.totalSum);

// basket.clear();
// console.log(basket);