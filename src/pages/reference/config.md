---
index: 120
category: classes
path: /reference/config
title: Config
---

Used to access all of Inkdrop's configuration details.

An instance of this class is always available as the `inkdrop.config` global.

## Getting and setting config settings

```js
// Note that with no value set, `::get` returns the setting's default value. 
inkdrop.config.get('my-package.myKey') // -> 'defaultValue' 
 
inkdrop.config.set('my-package.myKey', 'value')
inkdrop.config.get('my-package.myKey') // -> 'value' 
```

You may want to watch for changes. Use `::observe` to catch changes to the setting.

```js
inkdrop.config.set('my-package.myKey', 'value')
inkdrop.config.observe('my-package.myKey', newValue => {
  // `observe` calls immediately and every time the value is changed 
  console.log('My configuration changed:', newValue)
})
```

If you want a notification only when the value changes, use `::onDidChange`.

```js
inkdrop.config.onDidChange('my-package.myKey', ({ newValue, oldValue }) => {
  console.log('My configuration changed:', newValue, oldValue)
})
```

## Value Coercion

Config settings each have a type specified by way of a schema.
For example we might want an integer setting that only allows integers greater than `0`:

```js
// When no value has been set, `::get` returns the setting's default value 
inkdrop.config.get('my-package.anInt') // -> 12 
 
// The string will be coerced to the integer 123 
inkdrop.config.set('my-package.anInt', '123')
inkdrop.config.get('my-package.anInt') // -> 123 
 
// The string will be coerced to an integer, but it must be greater than 0, so is set to 1 
inkdrop.config.set('my-package.anInt', '-20')
inkdrop.config.get('my-package.anInt') // -> 1 
```

## Defining settings for your package

Define a schema under a `config` key in your package main.

```js

module.exports = {
  config: {
    someInt: {
      title: 'Some int',
      type: 'integer',
      default: 34,
      minimum: 10
    }
  },

  activate() {
    // ...
```

See [package docs](/manual/plugin-word-count) for more info.

## Config Schemas

We use [json schema](http://json-schema.org/) which allows you to define your value's default, the type it should be, etc. A simple example:

```js
{
  config: {
    enableThing: {
      title: 'enable thing',
      type: 'boolean',
      default: false
    },
    thingVolume: {
      title: 'thing volume',
      type: 'integer',
      default: 5,
      minimum: 1,
      maximum: 11
    }
  }
}
```

The type keyword allows for type coercion and validation.
If a `thingVolume` is set to a string `'10'`, it will be coerced into an integer.

### Supported Types

The `type` keyword can be a string with any one of the following.

### string

Values must be a string.

```js
{
  config: {
    someSetting: {
      title: 'some string setting',
      type: 'string',
      default: 'hello'
    }
  }
}
```

### number

Values will be coerced into a number, including real numbers. Supports the (optional) `minimum` and `maximum` keys.

```js
{
  config: {
    someSetting: {
      title: 'some number setting',
      type: 'number',
      default: 5.3,
      minimum: 1.5,
      maximum: 11.5
    }
  }
}
```

### boolean

Values will be coerced into a Boolean.
`'true'` and `'false'` will be coerced.

```js
{
  config: {
    someSetting: {
      title: 'some boolean setting',
      type: 'boolean',
      default: false
    }
  }
}
```

### Other Supported Types

### enum

All types support an `enum` key, which lets you specify all the values the setting can take.
`enum` may be an array of allowed values (of the specified type).

In this example, the setting must be one of the 3 strings:

```js
{
  config: {
    someSetting: {
      title: 'some string setting',
      type: 'string',
      default: 'foo',
      enum: ['foo', 'bar', 'baz']
    }
  }
}
```

### title and description

The settings view will use the `title` and `description` keys to display your config setting in a readable way.
By default the settings view humanizes your config key, so `someSeting` becomes `Some Setting`.
In some cases, this is confusing for users, and a more descriptive title is useful.

Descriptions will be displayed below the title in the settings view.

```js
{
  config: {
    someSetting: {
      title: 'Setting Magnitude',
      description: 'This will affect the blah and the other blah',
      type: 'integer',
      default: 4
    }
  }
}
```

### Manipulating values outside your configuration schema

It is possible to manipulate (`get`, `set`, `observe` etc) values that do not appear in your configuration schema. For example, if the config schema of the package 'some-package' is

```js
{
  config: {
    someSetting: {
      type: 'boolean',
      default: false
    }
  }
}
```

You can still do the following

```js
let otherSetting  = inkdrop.config.get('some-package.otherSetting')
inkdrop.config.set('some-package.stillAnotherSetting', otherSetting * 5)
```

In other words, if a function asks for a `key-path`, that path doesn't have to be described in the config schema for the package or any package.
However, as highlighted in the best practices section, you are advised against doing the above.


## Best practices

* Don't depend on (or write to) configuration keys outside of your keypath.

