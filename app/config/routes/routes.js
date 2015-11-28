module.exports = function(app) {
  // All default routes
  require('./default-routes')(app);

  // All signup / signin routes
  require('./signup-routes')(app);

  // Add future routes here
}
