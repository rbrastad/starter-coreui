# Starter Core UI

Starter theme for Core UI (http://coreui.io/) on Enonic XP using React and Bootstrap 4. 

The APP is a pure frontend UI application that lets you develop and deploy react apps running on Enonic XP. 
All data must come from services in this app, another app os some other source of data.    

Example site of the application on coreui web site: http://coreui.io/demo/React_Demo/#/

## Getting started

Download and install the pre-built app with content setup: https://github.com/rbrastad/starter-coreui/tree/with-content-to-import/build/libs  

Take a tour of the installed app.

## Developing

* Download the latest release for the starter kit on github .
* Rename the application in gradle.properties and build.gradle.
* Build and deploy to XP server. All dependencies should now be installed and the App is built and deployed
* Login to XP admin and go to Content Studio and create a site and install the application to the site.
* Select a page template. Then choose Default Page template. The Core UI theme should now be loaded.  

**React files**

All react files is foud in  src -> resources -> assets -> app

**SASS files**

All SASS files is found in  src -> resources -> assets -> scss


### Transpiling and bundling on change
React and sass files needs to be transpiled and compiled when developed. Transpiling, compiling and bundling is done with webpack.  
 
To enable onchange transpiling, compiling and bundling we need to edit webpack.config.js
 
 Open webpack.config.js and uncomment:
```javascript
       // watch : true
```

To start transpiling, compiling and bundling use:

```javascript
    ./gradlew webpack
```

This will make webpack watch for changes in react and sass files  

## Livereload

Livereload is by defautl installed int the default page. Changes done to sass or react files will automatically force a refresh on the web page.   


## Compatibility

| Version       | XP version |
| ------------- | ---------- |
| 0.1.0         | 6.9.0      |


## Changelog

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

## Licenses

Core UI - https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/blob/master/LICENSE

React - https://github.com/facebook/react/blob/master/LICENSE

Bootstrap - https://github.com/twbs/bootstrap/blob/master/LICENSE
