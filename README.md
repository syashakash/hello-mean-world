# MEAN Stack says "Hello World" !

This is a simple mini web app (actually, just a page) that I made to understand the integration of MongoDB, Express, Angular and Node.js. It fetches text from a MongoDB database, uses Express to render to a web api that is connnected to an Angular app.

## Prerequisites
```
    mongod --version
    v4.0.5

    node --version
    v11.6.0

    npm --version
    v6.6.0

    @angular/cli6
```

## To install prerequisites in Ubuntu :
```
sudo apt-get install nodejs npm
npm install -g @angular/cli@6
```

## Follow these steps once prerequisites configured:
Start the mongoDB server either by 
```
sudo service mongod start
```
or
```
mongod
```
Then,
```
cd hello-world
npm install
npm start
```

Now our backend is ready, keep the node server running.
In a different terminal tab,
```
cd ngApp
ng serve --open
```
This will start the front end and voila, our MEAN stack app just said Hello World. Play around and you can make the page say anything in any style.

If you get this error:
```
Could not find module "@angular-devkit/build-angular" from "/hello-mean-world-master/ngApp"
```
Just do:
```
npm update
```
## Author
[Akash Shivram](https://github.com/syashakash)