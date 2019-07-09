# Feed Reader Test with Jasmine

## About this project

In this project we are given a web-based application that reads RSS feeds using rss2json API. A set of feeds are predefined inside `./js/app.js`. An initial test suite was provided, we were required to complete the tests according to the specs so that all tests would pass.

## How to run tests

1. Download or clone this git repository
2. Open index.html file to view app and in-page test results
3. To add or edit test suites, open `./jasmine/spec/feedreader.js`

## Tests

1. RSS Feeds
    * allFeeds object is defined and not empty
    * each feed has a URL defined and is not empty
    * each feed has a name defined and is not empty
2. Menu
    * is hidden by default
    * toggles visibility when clicked
3. Initial Entries
    * contains at least one entry once feed has been loaded
4. New Feed Selection
    * Contain is updated every time new feed is loaded

## Dependencies

[Jasmine Standalone testing framework version 3.4.0](https://github.com/jasmine/jasmine#installation)
