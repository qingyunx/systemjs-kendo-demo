import EventEmitter from 'eventemitter3';

var App = kendo.Class.extend({
  ee: new EventEmitter()
});

var app = new App();

export { app };
