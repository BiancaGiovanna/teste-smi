import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/production-demand', 'ProductionDemandsController').apiOnly()
}).prefix('/api')
