
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

### Uruchomienie aplikacji frontendowej
cd client <br />
npm install <br />
npm start // ON WINDOWS <br />
npm run start-mac // ON LINUX <br />
appilcation starts on the port 8000 <br />

### Uruchomienie aplikacji backendowej
cd server <br />
npm install <br />
appilcation starts on the port 3000 <br />
npm start <br />