import {RouteConfig} from 'aurelia-router';

export const routes : RouteConfig[] = [
  { route: ['', 'home'],    name: 'home',   moduleId: 'home/home', nav: false, title: 'Home'},
  { route: 'membership', name: 'membership', moduleId: 'membership/membership', nav: true, title: 'Membership'},
  { route: 'courses-and-lessons', name: 'classes', moduleId: 'classes/classes', nav: true, title: 'Courses and lessons'},
  { route: 'where-and-when', name: 'location', moduleId: 'where-and-when/where-and-when', nav: true, title: 'Where and when'},
  { route: 'contact-us', name: 'contact-us', moduleId: 'home/home', nav: true, title: 'Contact Us'}
];
