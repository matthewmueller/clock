/**
 * Module Dependencies
 */

var domify = require('domify');
var el = domify(require('./template'));

/**
 * Expose `Clock`
 */

module.exports = Clock;

/**
 * Clock
 *
 * @param {Number} hr
 * @param {Number} min
 * @param {Number} sec
 * @return {Clock}
 * @api public
 */

function Clock(hr, min, sec) {
  if (!(this instanceof Clock)) return new Clock(hr, min, sec)
  this.hr = hr || 12;
  this.min = min || 0;
  this.sec = sec || 0;
  this.el = el.cloneNode(true);
  this.hrHand = this.el.querySelector('.hr');
  this.minHand = this.el.querySelector('.min');
  this.secHand = this.el.querySelector('.sec');

  // refresh
  this.hour(this.hr);
  this.minute(this.min);
  this.second(this.sec);
}

/**
 * Refresh the clock to the current time
 *
 * @return {Clock}
 * @api public
 */

Clock.prototype.refresh = function() {
  var date = new Date;
  this.hour(date.getHours());
  this.minute(date.getMinutes());
  this.second(date.getSeconds());
  return this;
};

/**
 * Get or set the hour
 *
 * @param {Number} hr
 * @return {Number|Clock}
 * @api public
 */

Clock.prototype.hour = function(hr) {
  if (hr === undefined) return this.hr;
  this.hr = hr;
  var deg = (60 * hr + this.min) / 2;
  this.hrHand.setAttribute('transform', 'rotate(' + deg + ')');
  return this;
};

/**
 * Get or set the minute
 *
 * @param {Number} min
 * @return {Number|Clock}
 * @api public
 */

Clock.prototype.minute = function(min) {
  if (min === undefined) return this.min;
  this.min = min;
  var deg = 6 * min;
  this.minHand.setAttribute('transform', 'rotate(' + deg + ')');
  return this;
};

/**
 * Get or set the second
 *
 * @param {Number} sec
 * @return {Number|Clock}
 * @api public
 */

Clock.prototype.second = function(sec) {
  if (sec === undefined) return this.sec;
  this.sec = sec;
  var deg = 6 * sec;
  this.secHand.setAttribute('transform', 'rotate(' + deg + ')');
  return this;
};
