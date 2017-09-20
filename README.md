My first Custom Element, developed with the help of https://www.html5rocks.com/en/tutorials/webcomponents/customelements/

This is a simple input element existing in its own Shadow DOM (notice how the `!important` styling in the index.html page does not affect the style of the label).

When you type `delete` into the input, it gets removed from the DOM, and the event listeners are also cleaned up.

It has a fallback for legacy browsers:

![fallback for IE8](https://user-images.githubusercontent.com/5111927/30648582-4959fb78-9e16-11e7-89a0-d54380c0a7c8.png)

Looks slightly prettier in new browsers:

![new browsers](https://user-images.githubusercontent.com/5111927/30648585-4c69b86c-9e16-11e7-9b90-eb5e0da27156.png)

And outputs cool stuff in the console log:

![console output](https://user-images.githubusercontent.com/5111927/30648592-4f60e1da-9e16-11e7-8b84-50f18978087a.png")
