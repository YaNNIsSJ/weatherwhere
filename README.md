# weatherwhere
# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Origami Modules

I have used the origami module O-fonts for the main title font. To achieve this, I used a font face decleration which makes sure that even if the webpage user does not have the font installed on their system, it still shows on the webpage.

## Deployed on Heroku

The site is deployed on Heroku, using Git as the code repository.

## Server-Side Rendered

For this project, I used express JS to create a web server that listens on port 5000 for connections. I also used a template engine which changes my template file into an HTML file that is sent to the client.

## Availability

The site can easily be accessed using the link https://weatherwhere.herokuapp.com/.

## Be Performant over 3G Networks

The site is able to perform over 3g networks as it is not a data-heavy site. So on 3g Networks, the site is able to function well.

## Be Responsive

To allow the site to be responsive, I have placed the buttons and text boxes in the centre of the page with a reasonable margin of the bottom and the top allowing the site to respond to different size screens.
