### v3.1.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v3.0.0...v3.1.0)

#### Misc

* Added InfernoView to allow jsx component views.
* Added a redux plugin so that Marionette.View can consume redux state and handle changes.

### v3.0.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v2.0.0...v3.0.0)

#### Package Updates

* Update to Handlebars 4.
* Replaced numeral with numbro.
* Replaced Backbone.Validation with a version compatible with lodash4.
* Updated to jQuery 3.0.0

#### Breaking change

* Remove hammerjs
* Remove touch view mixin.
* Named export rewrite, users using babel exports default plugin will no longer need this.
* Removed module helper.
* Removed `getInstance`.
* Remove Backbone.Stickit.
* Remove full lodash in favour of a custom version that includes only backbone dependencies.

#### Misc

* import full lodash in `Collection`.
* export attachHelpers to allow attaching handlebars helpers to a different instance of handlebars.
* export `sync` and `Backbone.Collection`.

### v3.0.0-pre.5 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v3.0.0-pre.4...v3.0.0-pre.5)

#### Breaking Changes

* Remove Backbone.Stickit.

#### Misc

* export `sync` and `Backbone.Collection`.

### v3.0.0-pre.4 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v3.0.0-pre.3...v3.0.0-pre.4)

#### Misc

* export attachHelpers to allow attaching handlebars helpers to a different instance of handlebars.

### v3.0.0-pre.3 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v3.0.0-pre.2...v3.0.0-pre.3)

#### Misc

* import full lodash in `Collection`.

### v3.0.0-pre.2 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v3.0.0-pre.1...v3.0.0-pre.2)

#### Package Updates

* Replaced numeral with numbro.
* Replaced Backbone.Validation with a version compatible with lodash4.

#### Breaking change

* Named export rewrite, users using babel exports default plugin will no longer need this.
* Removed module helper.
* Removed `getInstance`.

### v3.0.0-pre.1 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v2.0.0...v3.0.0-pre.1)

#### Package Updates

* Update to Handlebars 4.

#### Breaking change

* Remove hammerjs
* Remove touch view mixin.

### v2.0.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.5.1...v2.0.0)

#### Package Updates

* Update to Marionette 3.0.
* Update to lodash 4
* Remove Radio in favour of using the instance that is bundled with Marionette 3.0.
* Translation strings can now have colons present.

### v2.0.0-pre.3 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v2.0.0-pre.2...v2.0.0-pre.3)

#### Package Updates

* Update to Marionette 3.0 prerelease 5.


### v2.0.0-pre.2 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v2.0.0-pre.1...v2.0.0-pre.2)

#### Fixes

* Translation strings can now have colons present.

### v2.0.0-pre.1 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.5.1...v2.0.0-pre.1)

#### Package Updates

* Update to Marionette 3.0 prerelease.
* Update to lodash 4
* Remove Radio in favour of using the instance that is bundled with Marionette 3.0.

### v1.5.1 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.5.0...v1.5.1)

#### Package Updates

* Use v2.3.5 of i18next to solve regression in 2.4.0.

### v1.5.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.4.0...v1.5.0)

### New Features

* Added ability to use Marionette.Inspector in chrome devtools.

### v1.4.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.3.4...v1.4.0)

### New Features

* Support Plurals in translate helper.

#### Package Updates

* Update backbone.storage.

### v1.3.4 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.3.3...v1.3.4)

#### Package Updates

* Update backbone.service.
* Update i18next to 2.1.0 as 1.11.x had been deprecated.

### v1.3.3 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.3.2...v1.3.3)

#### Bugs

* Add browserify-swap to prevent inclusion of both underscore and lodash.

### v1.3.2 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.3.1...v1.3.2)

#### Bugs

* Stop including both underscore and lodash, and only use lodash.

### v1.3.1 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.3.0...v1.3.1)

#### Package Updates

* Update backbone.stickit.

#### Bugs

* Add .babelrc to npmignore

### v1.3.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.2.0...v1.3.0)

#### Features

* Added Backbone.Validation.

#### Bugs

* Fixed duplicate declaration of `format` in `currencyHelper`.

#### Build Process

* Updated dependencies to build with Babel 6.

### v1.2.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.1.0...v1.2.0)

#### Features

* Added Backbone.Syphon.

### v1.1.0 [view commit logs](https://github.com/BedeGaming/orchestra/compare/v1.0.0...v1.1.0)

#### Features

* Added Backbone-routing.
* Added Backbone.Storage.
* Added Backbone.Service.

#### Misc

* Bumped Backbone dependency to 1.2.3

### v1.0.0

* Initial release.
