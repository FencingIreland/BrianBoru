import {RouterConfiguration, Router} from 'aurelia-router';
import {routes} from './app-routes';

export class App {
  router : Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Brian Boru Fencing Club';
    config.map(routes);
  }

  attached(){
    $('.button-collapse').sideNav();
  }
}