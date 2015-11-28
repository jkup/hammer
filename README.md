[![Build Status](https://travis-ci.org/jkup/hammer.svg?branch=master)](https://travis-ci.org/jkup/hammer)

# Hammer

A Node.js, Express, MySQL, Passport, Jade starter kit.

## Screenshot

![Hammer Homepage Screenshot](/hammer_screenshot.png "Hammer Screenshot")

## Installation

    git clone https://github.com/jkup/hammer.git
    cd hammer
    npm install

### MySQL

First you'll need to create a database, name it anything you'd like but you'll need the name later.

    $ mysql -uroot -p
    mysql> CREATE DATABASE YOUR_DATABASE;

Inside this database create a 'users' table that contains the following fields:

    mysql> CREATE TABLE `YOUR_DATABASE`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `username_UNIQUE` (`username` ASC),
    UNIQUE INDEX `email_UNIQUE` (`email` ASC));

You'll then need to edit app/config/connection.js and enter your credentials.

    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'YOUR_USERNAME',
      password : 'YOUR_PASSWORD',
      database : 'YOUR_DATABASE'
    });

### Server

Now you can edit app/config/routes/default-routes.js and replace the title and message key with whatever you'd like to see as the home page title and header message.

### Start

Now just run:

    npm start

And off you go!

### Testing

A testing framework is already setup in the test folder. To run all tests, simply type:

    npm test


## Libraries

Hammer makes use of a lot of open source libraries. They are probably your best bet for getting specific help with your application. The current list of technologies can be found here.

+ [Node.js](https://nodejs.org/en/)
+ [Express.js](http://expressjs.com/)
+ [jQuery](https://jquery.com/)
+ [jade](http://jade-lang.com/)
+ [Passport](http://passportjs.org/)
+ [MySQL](https://www.mysql.com/)
+ [bcrypt](https://www.npmjs.com/package/bcryptjs)
+ [Bootstrap](http://getbootstrap.com/)
