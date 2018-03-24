# Ember Floating Mobile Buttons

[![Build Status](https://travis-ci.org/yontxu/ember-floating-mobile-buttons.svg?branch=master)](https://travis-ci.org/yontxu/ember-floating-mobile-buttons)
[![npm](https://img.shields.io/npm/dm/ember-floating-mobile-buttons.svg)](https://www.npmjs.com/package/ember-floating-mobile-buttons)
[![npm version](https://badge.fury.io/js/ember-floating-mobile-buttons.svg)](https://badge.fury.io/js/ember-floating-mobile-buttons)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Ember Observer Score](https://emberobserver.com/badges/ember-floating-mobile-buttons.svg)](https://emberobserver.com/addons/ember-floating-mobile-buttons)

Stylish and easy to use Ember floating buttons.
 
 More information in the [demo](https://yontxu.github.io/jekyll-floating-mobile-buttons/) site.

## Installation

```
ember install ember-floating-mobile-buttons
```

## Usage

Define a simple floating button.
```hbs
{{#floating-mobile-buttons}}
    <a href>{{fa-icon "pencil"}}</a>
{{/floating-mobile-buttons}}
```

You can additionally define child buttons which will be display grouped by the parent button.

```hbs
{{#floating-mobile-buttons position="bottom right"}}
    {{#floating-mobile-child-buttons label="Add Item"}}
      <a href>{{fa-icon "user"}}</a>
    {{/floating-mobile-child-buttons}}
    {{#floating-mobile-child-buttons label="Remove Item"}}
      <a href>{{fa-icon "trash-o"}}</a>
    {{/floating-mobile-child-buttons}}
    {{#floating-mobile-child-buttons label="Edit Item"}}
      <a href>{{fa-icon "pencil"}}</a>
    {{/floating-mobile-child-buttons}}
{{/floating-mobile-buttons}}
```

The `floating-mobile-buttons` component yields the clousure action `toggleChildren` so you are able to use it in your child components to toggle the child button group.

```hbs
{{#floating-mobile-buttons as |toggleChildren|}}
    {{#floating-mobile-child-buttons label="Add Item"}}
      <a href {{action toggleChildren}}>{{fa-icon "user"}}</a>
    {{/floating-mobile-child-buttons}}
{{/floating-mobile-buttons}}
```

As seen in the examples above, you can combine it with your own icon library.

## Properties

### Position
The fixed position of the floating button.

The available list por position:
* bottom right (default) 
* bottom left
* top right
* top left

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
