/* Step 1 import express
 *
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `shopsApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const shopsApi = require('../models/shop.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from shopRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const shopRouter = express.Router()


/* Step 4
 * 
 */

shopRouter.get('/', function(req,res) {
  res.render('shops/shops', { shops: shopsApi.getShops()});
})

shopRouter.get('/new', function(req, res) {
  res.render('shops/create', { shop: shopsApi.createShop() });
})

shopRouter.get('/:index', function(req,res){
  const index = req.params.index
  res.render('shops/shop', { shop: shopsApi.getShop(index), index });
})

shopRouter.post('/', function(req,res){
  shopsApi.addShop(req.body);
  res.redirect('/shops');
})

shopRouter.put('/:index', function(req,res){
  const index = req.params.index;
  shopsApi.updateShop(index, req.body);
  res.render('shops/shop', { shop: shopsApi.getShops(index), index, saved: true})
})

shopRouter.delete('/:index', function(req,res){
  shopsApi.deleteShop(req.params.index)
  res.redirect('/shops')
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shopRouter
}