import {RouterConfiguration, Router} from 'aurelia-router';
import {routes} from './app-routes';

export class App {
  router : Router;
  sideNav : any;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Brian Boru Fencing Club';
    config.map(routes);
  }

  attached(){
    $(this.sideNav).sideNav();
  }

  collapseNav() {
    $(this.sideNav).sideNav('hide');
    return true;
  }
}