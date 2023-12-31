import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'Hello')
  Route.resource('/production-demand', 'ProductionDemandsController').apiOnly()

  Route.patch('/production-demand/:id/uptade-status', 'ProductionDemandsController.updateStatus')
}).prefix('/api')
