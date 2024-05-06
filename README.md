# Apartments app


### Running the [Server](https://apartments-production-15ef.up.railway.app/api/v1/apartments)

* Install all dependencies

```
npm install
```

* To run the server, Open your terminal and run:

```
npm run serve
```

### Database Setup

Create MongoDB database account from [here](https://account.mongodb.com/account/register).
- Add database url in your ```.env```

```
   DB_CONNECTION=mongodb+srv://<username>:<password>@apartments.ppvhchs.mongodb.net/?retryWrites=true&w=majority&appName=Apartments
   DEV_URI='mongodb://localhost/[devDatabase]'
```

### Running the [Client]([https://apartments-ga](https://apartments-ga5r.vercel.app/))

* Install all dependencies

```
cd client/
npm install
```

* To run the next app, Open your terminal and run:

```
npm run dev
```


## Technologies 


* [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/).
* Database: [MongoDb](https://www.mongodb.com/).
* Frontend : [NextJs]()
