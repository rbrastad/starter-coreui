# Starter Core UI

This is a starter theme for Core UI (http://coreui.io/) and uses is configured to use React for building the UI. 
The starter kit can be used for building your frontend in React on Enonic XP. 

Example site of the application on core ui web site: http://coreui.io/demo/React_Demo/#/

## Getting started

Download the starter kit from github.
rename the application in gradle.properties and build.gradle
Then deploy to XP server. All dependencies should now be installed and the App is dbuolt and deployed
Login to XP admin
Go to Content Studio and create a site and install the application to the site.
Select a page template. Then choose this app Default Page template.


For developing uncomment watch in webpack.config.js . This will make webpack listen for changes and then transpile and bundle on any change. 

```javascript
       // watch : true
```

Then star tthe webpack task for instant transpiling and bundling.

```javascript
    ./gradlew webpack
```

## Compatibility

| Version       | XP version |
| ------------- | ---------- |
| 0.1.0         | 6.9.0      |


## Projects using this:

Data PULL - https://github.com/rbrastad/data-pull
Data Console - https://github.com/rbrastad/data-console

## Changelog

### 0.1.0

* Initial setup of Core UI theme
* Transpile .jsx files in the app direcory and create a bundle.
* Compile sass files in the scss directory and create a bundle.
* Setup up webpack to watch for changes in sass and jsx files and bundle them.
* Added livereload when the bundles are changed.


## External resources

Core UI  - http://coreui.io/
Bootstrap 4 - https://v4-alpha.getbootstrap.com/
React - https://facebook.github.io/react/
Webpack - https://webpack.github.io/

## Licenses

Core UI - https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/blob/master/LICENSE
React - https://github.com/facebook/react/blob/master/LICENSE
Bootstrap - https://github.com/twbs/bootstrap/blob/master/LICENSE
