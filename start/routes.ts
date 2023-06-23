/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.post('session', 'SessionsController.store')

Route.delete('session', 'SessionsController.destroy')
Route.resource('user', 'UsersController').apiOnly()
Route.resource('event', 'EventsController')

  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
    index: ['acl:admin, user'],
    show: ['acl:admin, user'],
  })

Route.post('course', 'CoursesController.store')
Route.get('course', 'CoursesController.index')
Route.get('course/:id', 'CoursesController.show')
Route.put('course/:id', 'CoursesController.update')
Route.delete('course/:id', 'CoursesController.destroy')
