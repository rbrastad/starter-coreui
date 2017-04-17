# Starter Core UI - React - Bootstrap 4

This is an Enonic XP implementation of Core UI (http://coreui.io/) with React. 

The theme and app can be used as a starter for an application that is created with React and Bootstrap 4. 
The theme contains examples of tabs, cards, dashboard and BS4 components that can be used in an application. Fonts and colors can be changed with SASS.

Build and developer tools has been setup for both developer and production mode. Developer mode contains transpiling and bundling of React and SASS files with webpack. ES6 files can be created and will be transpiled by Babel.
In developer mode livereload is enabled so changes in react and sass files will automatically refresh the browser. When the app is ready for production the build task compresses the bundle files.    
  

An example of the application implemented can be viewed here: http://coreui.io/demo/React_Demo/#/
An pre-built app can be found in /build/libs folder

## Getting started

### Developing

* Download the latest release of the starter kit on github .
* Rename the application in gradle.properties and build.gradle.
* Build and deploy to XP server.
* Login to XP admin and go to Content Studio and create a site and install the application to the site.
* Select a page template. Then choose Default Page template. The Core UI theme should now be loaded.  

**React files**

All react files is in src -> resources -> assets -> app

**SASS files**

All SASS files is in src -> resources -> assets -> scss

### Transpiling and bundling on change
React and sass files needs to be transpiled and compiled when developed. Transpiling, compiling and bundling of assets is done with webpack. Babel transpiles ES6 files.
 
To enable onchange transpiling, compiling and bundling in developer mode:
 
```javascript
       ./gradlew dev 
```

## Livereload

Livereload is by default enabled when running "dev". Changes done to sass or react files will automatically force a refresh in the web browser.   
The files needed for livereload is automatically added to the javascript bundle in dev mode. 

!! Currently you need to do a change in scss or react files after the tasks is started to add livereload to the bundle created.

## Compatibility

| Version       | XP version |
| ------------- | ---------- |
| 0.4.0         | 6.9.0      |
| 0.3.0         | 6.9.0      |
| 0.2.0         | 6.9.0      |
| 0.1.0         | 6.9.0      |

## Changelog

### 0.4.0

* Added ES6 transpiling for serverside javascript files.
* Added minifying of assets bundle for build task 
* Added gulp for watching for changes in ES6 files and jsx files.
* Added ES6 example service whoami and library auth  


### 0.3.0

* Added AssetImage component for loading images from assets folder on server.


### 0.2.0

* Added task dev when developing with auto transpilling and livereload


### 0.1.0

* Initial setup of Core UI theme
* Transpile .jsx files in the app direcory and create a bundle.
* Compile sass files in the scss directory and create a bundle.
* Setup up webpack to watch for changes in sass and jsx files and bundle them.
* Added livereload when the bundles are changed.


## External resources

Core UI  - http://coreui.io/

Core UI Documentation -  http://coreui.io/docs/getting-started/introduction

Bootstrap 4 - https://v4-alpha.getbootstrap.com/

React - https://facebook.github.io/react/

Webpack - https://webpack.github.io/

webpack-livereload-plugin - https://github.com/statianzo/webpack-livereload-plugin

## Licenses

Core UI - https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/blob/master/LICENSE

React - https://github.com/facebook/react/blob/master/LICENSE

Bootstrap - https://github.com/twbs/bootstrap/blob/master/LICENSE

webpack-livereload-plugin - https://github.com/statianzo/webpack-livereload-plugin/blob/master/LICENSE