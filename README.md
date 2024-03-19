# Show casing Design Patterns for PHP & JS

- [x] Adapter Pattern
- [x] Factory Pattern
- [x] Observer Pattern
- [x] Builder Pattern
- [x] Strategy Pattern
- [x] Adapter Pattern
- [x] Proxy Pattern
- [x] Prototype Pattern
- [x] Facade Pattern
- [ ] Decorator Pattern
- [ ] Composite Pattern

- [ ] Command Pattern

# Writing Unit testing for Design Pattern
- [x] Adapter Pattern

# Dependency Injection (DI) Container in PHP Example
- [x] Dependency Injection

Using Container and Dependency Injection architecture
this allows our app to depend on a DBAdapter interface instead of depending on Oracle Adapter directly.
Plus deferring the Adapter initialisation to container instead of writing Adapter in our app.
 
 
 # Unit testing
 1- add new folders if any to composer.json
 
 2- run 
 > composer dump-autoload
 
 3- run for Linux
 > ./vendor/bin/phpunit tests

 or run for windows
 > vendor\bin\phpunit tests 