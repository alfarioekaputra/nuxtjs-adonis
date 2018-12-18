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
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.post('api/login', 'AuthController.postLoginApi').as('loginApi')
Route.post('api/logout', 'AuthController.postLogoutApi').as('logoutApi').middleware(['auth:api'])
Route.post('api/logoutAll', 'AuthController.postLogoutApiAll').as('logoutApiAll').middleware(['auth:api'])
Route.get('api/profile', 'AuthController.getProfileApi').as('profileApi').middleware(['auth:api'])

//category
Route.get('api/category', 'CategoryController.index').middleware(['auth:api'])
Route.post('api/category', 'CategoryController.store').middleware(['auth:api'])

Route.any('*', 'NuxtController.render')

