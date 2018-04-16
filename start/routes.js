'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('frontend')

/**
 * Routes for api/v1
 * Controller folder for namespace: app/Controllers/Http/Api/V1
 */
Route.group(() => {
    
    Route.post('auth/login', 'AuthController.login')
    Route.post('auth/register', 'AuthController.register')
    Route.get('auth/user', 'AuthController.getUserInfo')

}).prefix('api/v1').namespace('Api/V1')
