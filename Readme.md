
# clock

Create a swiss railway inspired clock.

![swiss clock](http://i.cloudup.com/dpi2yHoUlp.png)

## Installation

    $ component install matthewmueller/clock

## Example

```js
var clock = new Clock;

clock.refresh();
document.body.appendChild(clock.el);

setInterval(function() {
  clock.refresh();
}, 1000);
```

## API

#### `Clock(hour, minute, second)`

  Initialize a `Clock`

#### `Clock.refresh()`

Refresh the clock to the current time

```js
clock.refresh()
```

#### `Clock.hour(hr)`

Get or set the hour.

```js
clock.hour(5)
```

#### `Clock.minute(min)`

Get or set the minute

```js
clock.minute(30)
```

#### `Clock.second(sec)`

Get or set the second

```js
clock.second(45)
```

## License

  MIT
