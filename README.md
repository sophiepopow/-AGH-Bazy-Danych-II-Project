
# Aplikacja Sklepu Internetowego alla Allegro dla lokalnych rolników

Magdalena Skarbińska, Klaudia Sophie Popow, Marcel Spryszyński

## Opis Projektu:
W bazie danych przechowywane są dane sklepów/sprzedawców (lokalnych rolników), oraz ich produktów dostępnych do sprzedaży wraz z ich aktualną ilością na stanie, opisem oraz opiniami. Przechowywane są też dane kupców i ich transakcje.

Administratorzy aplikacji mają dostęp do zarządzania użytkownikami( usunięcie klienta lub sprzedawcy z aktulanej listy).

Sprzedawcy mają dostęp do zarządzania swoim sklepem, modyfikacji produktów w ich ofercie.

Klienci (kupcy produktów) mają możliwość wyszukania produktów, zakupienia produktów z wybranego sklepu, dodania opinii za transakcję.


### Baza danych: 
MongoDB - Nierelacyjny system zarządzania bazą danych.
### Frontend: 
React.js - JavaScript’owa biblioteka wykorzystywana do do budowy interfejsów graficznych i aplikacji webowych.
### Backend: 
Express.js - lekki framework do budowy aplikacji internetowych dla platformy Node.js
Zdecydowaliśmy się na powyższy stack technologiczny ze względu na popularność jego wykorzystania w aplikacjach o podobnej charakterystyce do naszego projektu.

### Requirements
- node version v14.19.1 recommended
- npm version 6.14.16 recommended

## Uruchomienie aplikacji frontendowej
    cd client
    npm install
    npm start // ON WINDOWS
    npm run start-mac // ON LINUX / MACOS
    
~~~
appilcation starts on the port 8000
~~~

## Uruchomienie aplikacji backendowej
    cd server
    npm install
    npm start
    
~~~
appilcation starts on the port 3000
~~~

# Baza Danych
## Modele w bazie danych
W bazie danych są 4 Kolekcje: Customer, Seller, Products, Transactions.

1) Customer
    ~~~js
    const Customer = new Schema(
    {
        auth:{login:String,password:String},
        name:String,
        basket: [{product_id:String, productName:String, seller_id:String, count:Number, price:Number}]
    { timestamps: true },
    )


2) Seller
    ~~~js
    const Seller = new Schema(
    {
        auth:{login:String,password:String},
        name:String
    },
    { timestamps: true },
    )

    ~~~
3) Products
    ~~~js
    const Review = new Schema({user: String, date: Date, stars: Number, text: {type: String, required: false}})
    const Product = new Schema(
    {
        productName: { type: String, required: true},
        category: { type: String, required: true },
        price: { type: Number, required: true },
        shopName: {type: String, required: true },
        seller_id: { type: String, required: true },
        reviews: {type: [Review], required: false},
        count:  {type: Number, required: true }
    },
    { timestamps: true },
    )

    ~~~
    
4) Transactions
    ~~~js
    const Transaction = new Schema(
    {
        customer_id: { type: String, required: true },
        products: [{product_id:String, productName:String, seller_id:String, count:Number}],
        price: {type: Number, required:true}
    },
    { timestamps: true },
    )
    
    ~~~

### Przykładowe dane
1) Customer
    ~~~json
    { 
        "_id" : "628e3c679d0a356deef7938c", 
        "auth" : {
            "login" : "pan", 
            "password" : "$2a$10$H2j0eyASs1cLvfdxue.C4uxOIwhQqjWthg/H689qhMAuyOziH6dw2"
        }, 
        "name" : "Miły Pan", 
        "basket" : [

        ], 
        "createdAt" : "2022-05-25T14:25:43.995+0000", 
        "updatedAt" : "2022-05-25T14:29:21.103+0000", 
        "__v" : 1
    }
   ~~~

2) Seller
    ~~~json
    { 
    "_id" : "6280da7ecdd4393183752174", 
    "auth" : {
        "login" : "strączki123", 
        "password" : "fasolka888"
    }, 
    "name" : "Najlepsze strączkowe", 
    "rating" : null, 
    "createdAt" : "2022-05-15T10:48:30.207+0000", 
    "updatedAt" : "2022-05-15T10:48:30.207+0000", 
    "__v" : 0
    }

    ~~~
3) Products
    ~~~json
    {
        "_id":"628d13e18cd4f371192ae056",
        "productName":"Truskawki",
        "category":"Owoce",
        "price":10,
        "shopName":"Sklep Pani Basi",
        "seller_id":"628ab70945e020ac0917eb72",
        "count":10,
        "reviews":
          [{
            "user":"628bedbfc114009ada693f55",
            "date":"2022-05-23T22:00:00.000Z",
            "stars":4,"_id":"628d425b779d0c1a496c17b1"
          }],
        "createdAt":"2022-05-24T17:20:33.217Z",
        "updatedAt":"2022-05-24T20:38:51.359Z",
        "__v":5
    }
    ~~~
    
4) Transactions
   ~~~json
   { 
    "_id" : "628e0efe7b7995234486c801", 
    "customer_id" : "628df5abe052afd4b7931c3e", 
    "products" : [
        {
            "productName" : "Jabłka", 
            "seller_id" : "628dfbda6387e5c9a32b6b55", 
            "count" : 30, 
            "_id" : "628dfe097b7995234486c787"
        }, 
        {
            "productName" : "Marchewki", 
            "seller_id" : "628dfbda6387e5c9a32b6b55", 
            "count" : 8, 
            "_id" : "628dfee97b7995234486c78a"
        }, 
        {
            "productName" : "Czereśnie", 
            "seller_id" : "628dfbda6387e5c9a32b6b55", 
            "count" : 3, 
            "_id" : "628dff007b7995234486c78c"
        }, 
        {
            "productName" : "Truskawki", 
            "seller_id" : "628dfac86387e5c9a32b6b45", 
            "count" : 25, 
            "_id" : "628e00587b7995234486c797"
        }, 
        {
            "productName" : "Marchewki", 
            "seller_id" : "628dfac86387e5c9a32b6b45", 
            "count" : 15, 
            "_id" : "628e006c7b7995234486c799"
        }, 
        {
            "productName" : "Jabłka", 
            "seller_id" : "628dfac86387e5c9a32b6b45", 
            "count" : 100, 
            "_id" :"628e007c7b7995234486c79b"
        }, 
        {
            "productName" : "Jajka", 
            "seller_id" : "628dfac86387e5c9a32b6b45", 
            "count" : 12, 
            "_id" : "628e008b7b7995234486c79d"
        }, 
        {
            "productName" : "Pietruszki", 
            "seller_id" : "628dfbb36387e5c9a32b6b50", 
            "count" : 7, 
            "_id" : "628e051b7b7995234486c7a3"
        }, 
        {
            "productName" : "Jabłka", 
            "seller_id" : "628dfbb36387e5c9a32b6b50", 
            "count" : 8, 
            "_id" : "628e052c7b7995234486c7a5"
        }, 
        {
            "productName" : "Wiśnie", 
            "seller_id" : "628dfb4b6387e5c9a32b6b49", 
            "count" : 10, 
            "_id" : "628e05cd7b7995234486c7ab"
        }, 
        {
            "productName" : "Czereśnie", 
            "seller_id" : "628dfbc36387e5c9a32b6b52", 
            "count" : 12, 
            "_id" : "628e06397b7995234486c7af"
        }
    ], 
    "price" : 4956, 
    "createdAt" : "2022-05-25T11:11:58.891+0000", 
    "updatedAt" : "2022-05-25T11:11:58.891+0000", 
    "__v" : 0}
    ~~~

## API
### Product:
    GET api/products - zwraca wszystkie produkty
    PUT api/product/:id - update'uje produkt o danym id
    POST api/product - dodaje nowy produkt
    DELETE api/product/:id - usuwa dany produkt
### Seller:
    GET api/sellers - zwraca wszystkich sprzedawców
    GET api/seller/:id - zwraca sprzedawcę o danym id
    POST api/seller - dodaje nowego sprzedawcę
    DELETE api/seller/:id - usuwa danego sprzedawcę
### Customer:
    GET api/customers - zwraca wszystkich klientów
    GET api/seller/:id - zwraca klienta o danym id
    POST api/customer - dodaje nowego sprzedawce
    DELETE api/customer/:id - usuwa danego klienta
### Transaction:
    POST api/transaction - tworzy transakcję
### Basket:
    GET api/basket/:id - zwraca koszyk o danym id
    PUT api/basket/:id - update'uje koszyk o danym id
    
## Filtry w Produktach

~~~js
const getProducts = async (req, res) => {
const match={}
const sort ={}
console.log(req)
if(req.query.sortBy){
    const parts = req.query.sortBy.split('.')
    sort[parts[0]] = parts[1]==='desc'? -1 : 1
}

if(req.query.productName){
    match.productName = { $regex: req.query.productName };
}

if(req.query.shopName){
    match.shopName = { $regex: req.query.shopName };
}

if(req.query.category){
    match.category = req.query.category;
}

if(req.query.pricelte){
    match.price = {$lte:req.query.pricelte};
}

if(req.query.pricegte){
    match.price = {$gte:req.query.pricegte};
}
console.log(match)
try {
    const products = await Product.find(match).sort(sort);
    res.status(200).send({ success: true, data: products });
}
catch(err){
    console.log(err);
    res.status(400).send({ success: false, error: err });
} 
}
~~~
## Dodawanie / Zmiana oceny produktu
~~~js
const updateProductReview = (req, res) => {
const body = req.body

if (!body) {
    return res.status(400).json({
        success: false,
        error: 'You must provide review to update Product',
    })
}
if(!body.token) {
    return res.status(401).json({
        succes: false,
        error: "Please login first to add review!"
    })
}
let user = jwt.decode(body.token);
Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
        return res.status(404).json({
            err,
            message: 'Product not found!',
        })
    }
    product.reviews = product.reviews.filter(p => p.user !== user.id)
    product.reviews.push({
        user: user.id,
        date: new Date().toDateString(),
        stars: parseInt(body.review),
    });
    product
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                _id: product.id,
                message: 'Product updated!',
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(404).json({
                error,
                message: 'Product not updated!',
            })
        })
})
}
~~~

## Frontend
React Components:
 - Navbar - Zależnie od roli (klient, sprzedawca, Admin) dostępne są różne podstrony.
 - AddProductPage - Widok dostępny dla Sprzedawców, gdzie mogą dodać nowy produkt do swojego sklepu lub usunąć dany produkt ze sklepu.
 - BasketPage - Widok koszyka - produktów, które zamierzamy kupić (kupienie produktów oznacza stworzenie nowej transakcji)
 - LoginPage - Widok logowania.
 - RegisterPage - Widok rejestracji.
 - Stores - Lista Sprzedawców.
 - Products - Lista Wszystkich Produktów z możliwością sortowania po cenie i filtrowania po Kategorii lub nazwie sklepu.
 - AdminPanel - gdy zalogujemy się jako Admin dostępnny jest panel Admina, gdzie jest dostępna lista aktulanych klientów i sprzedawców i możliwość usunięcia wybranego z listy.
