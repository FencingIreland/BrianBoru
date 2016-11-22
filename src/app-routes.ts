import {RouteConfig} from 'aurelia-router';

export const routes : RouteConfig[] = [
  { route: ['', 'home'],    name: 'home',   moduleId: 'home/home', nav: false},
  { route: 'home#courses-and-lessons', name: 'courses', moduleId: 'home/home', nav: true, title: 'Courses and lessons'},
  { route: 'home#where-and-when', name: 'location', moduleId: 'home/home', nav: true, title: 'Where and when'},
  { route: 'home#contact-us', name: 'contact-us', moduleId: 'home/home', nav: true, title: 'Contact Us'}
];
