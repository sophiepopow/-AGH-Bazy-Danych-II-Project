
# Aplikacja Sklepu Internetowego alla Allegro dla lokalnych rolników

Magdalena Skarbińska, Klaudia Sophie Popow, Marcel Spryszyński

## Opis Projektu:
W bazie danych przechowywane są dane sklepów/sprzedawców (lokalnych rolników), oraz ich produktów dostępnych do sprzedaży wraz z ich aktualną ilością na stanie, opisem oraz opiniami. Przechowywane są też dane kupców i ich transakcje.

Administratorzy aplikacji mają dostęp do zarządzania użytkownikami( usunięcie, dodanie, zablokowanie etc.) 

Sprzedawcy mają dostęp do zarządzania swoim sklepem, modyfikacji produktów w ich ofercie, odpowiadania na opinie i wiadomości klientów

Klienci (kupcy produktów) mają możliwość wystawienia wyszukania produktów, zakupienia produktów z wybranego sklepu, dodania opinii za transakcję.


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
W bazie danych są 4 Kolekcje: Customer, Seller, Products, Transactions, Stores.

1) Customer
    ~~~js
    const Customer = new Schema(
    {
        auth:{login:String,password:String},
        name:String,
        transactions: [Schema.Types.ObjectId]
    },
    { timestamps: true },
    )

    ~~~
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
        uid: { type: String, required: true },
        reviews: {type: [Review], required: false},
        count:  {type: Number, required: true }
    },
    { timestamps: true },
    )

    ~~~
    
4) Transactions

### Przykładowe dane
1) Customer
    ~~~json
    { 
    "_id" : "628df5abe052afd4b7931c3e", 
    "auth" : {
        "login" : "user2", 
        "password" : "$2a$10$.oG16HYm5EQcqhzeHm55cO1gHdbXd79s1evcI0yp8xLRZa3Yssc8q"
    }, 
    "name" : "user2", 
    "createdAt" :"2022-05-25T09:23:55.928+0000", 
    "updatedAt" : "2022-05-25T09:23:55.928+0000", 
    "__v" : 0
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
        "uid":"628ab70945e020ac0917eb72",
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
    "__v" : NumberInt(0)
}
~~~

## Schemat Bazy Danych
## API
### Product:
    GET api/products - zwraca wszystkie produkty
    PUT api/product/:id - update'uje produkt o danym id
    POST api/product - dodaje nowy produkt
    DELETE api/product/:id 
### Seller:
    GET api/sellers - zwraca wszystkich sprzedawców
    GET api/seller/:id - zwraca sprzedawcę o danym id
    POST api/seller - dodaje nowego sprzedawce
### Customer:
    GET api/customers - zwraca wszystkich klientów
    GET api/seller/:id - zwraca klienta o danym id
    POST api/customer - dodaje nowego sprzedawce
## Frontend
React Components:
 - Navbar
 - ProductCard
 - StoreCard
 - AddProductPage
 - BasketPage
 - LoginPage
 - RegisterPage
 - Stores
 - Products
