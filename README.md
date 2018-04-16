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

### Vue Router History Mode

Modify __myapp/vue\_app/router/index.js__

```
let router = new VueRouter({
    mode: 'history',
    ....
```
And next modify __myapp/start/routes.js__

```
// Route.on('/').render('frontend')

Route.any('*', ({ view }) => view.render('frontend'))
```

AdonisJS documentation - [Routing for SPAs](https://adonisjs.com/docs/4.1/routing#_routing_for_spa_s)

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