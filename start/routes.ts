import Route from '@ioc:Adonis/Core/Route'

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

Route.get('team', 'TeamsController.index')
Route.post('team', 'TeamsController.store')
Route.put('team/:id', 'TeamsController.update')
Route.get('team/:id', 'TeamsController.show')
Route.delete('team/:id', 'TeamsController.destroy')

Route.get('teamevent', 'TeamEventsController.index')
Route.post('teamevent', 'TeamEventsController.store')
Route.get('teamevent/:id', 'TeamEventsController.show')
Route.put('teamevent/:id', 'TeamEventsController.update')
Route.delete('teamevent/:id', 'TeamEventsController.destroy')
