var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath:'https://altomontes.com/wp-content/uploads/revslider/sports-hero/ribbon-candy.png',
    title:'Roley Poley',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 10.00
  }),
  new Product({
    imagePath:'http://www.dorvaltrading.com/wp-content/uploads/2017/04/strawb-blue-rasp-popping-candy.png',
    title:'Heartstones',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 7.00
  }),
  new Product({
    imagePath:'http://www.sweettoothrockford.com/uploads/1/1/7/5/11753790/8691413_orig.png',
    title:'Crystalpops',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 8.50
  }),
  new Product({
    imagePath:'http://www.dorvaltrading.com/wp-content/uploads/2017/04/Quattro-popping-candy.png',
    title:'Bitbites',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 5.00
  }),
  new Product({
    imagePath:'http://www.candygurus.com/wp-content/uploads/bitesnic2.png',
    title:'Rainbow Bites',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 2.50
  }),
  new Product({
    imagePath:'http://www.pngall.com/wp-content/uploads/2016/07/Sweets-PNG-Pic.png',
    title:'Drops',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    price: 4.50
  })
];

var finished = 0;
for(var i = 0; i < products.length; i++){
  products[i].save(function(err, result) {
    finished++;
    if (products.length === finished) {
      exit();
    }
  });
}

exit = () => {
  mongoose.disconnect();
}
