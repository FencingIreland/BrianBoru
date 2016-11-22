import {RouterConfiguration, Router} from 'aurelia-router';
import 'materialize-css';

export class App {
  router : Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Brian Boru Fencing Club';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/home' }
    ]);
  }

  attached(){
    $('.button-collapse').sideNav();
  }
}