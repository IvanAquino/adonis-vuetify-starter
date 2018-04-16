# Adonis Vuetify starter with prebuilt auth pages

## Features
* Single Page Application
* Vue and Vue router configured with Auth restricted pages
* Two Dashboard page examples
* Prebuilt auth with JWT
* UI with [Vuetify](https://vuetifyjs.com)
* Powered by [AdonisJS](https://adonisjs.com)

## Installation

adonis new myapp --blueprint=IvanAquino/adonis-vuetify-starter


## Vue App

Vue app it's in the folder __vue_app/__, you can modify the different components and compile

Watch changes on components
```
npm run watch
```

Compile production version
```
npm run production
```

## Run adonis serve dev mode

```
adonis serve --dev
```

### Http Request
You can use ___this.$http___ to access all methos of Axios

### Headers on authorized routes
Use ___this.$auth.getToken()___ to access Bearer Token
```
let headers = { 'Authorization': this.$auth.getToken() }
this.$http.get(`${window.basePath}/auth/user`, {headers})
```