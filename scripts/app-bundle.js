define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Brian Boru Fencing Club';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home/home' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('home/home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n   <require from=\"materialize/bin/materialize.css\"></require>\n   <require from=\"./styles/main.css\"></require>\n   <!--[if lt IE 10]>\n    <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade\n        your browser</a> to improve your experience.</p>\n    <![endif]-->\n   <header>\n        <div class=\"navbar-fixed\">\n            <nav class=\"white\">\n                <div class=\"nav-wrapper black-text\">\n                  <div class=\"container\">\n                       <a href=\"#\" alt=\"Brian Boru Fencing Club\" class=\"brand-logo logo\"></a>\n                       <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse black-text\"><i class=\"material-icons\">menu</i></a>\n                       <ul class=\"right hide-on-med-and-down\">\n                           <li><a href=\"#\" class=\"black-text\">Courses and lessons</a></li>\n                           <li><a href=\"#\" class=\"black-text\">Where and when</a></li>\n                           <li><a href=\"#\" class=\"black-text\">Contact Us</a></li>\n                       </ul>\n                  </div>\n                </div>\n            </nav>\n        </div>\n        <ul class=\"side-nav\" id=\"mobile-demo\">\n            <li><a href=\"#\" class=\"black-text\">Courses and lessons</a></li>\n            <li><a href=\"#\" class=\"black-text\">Where and when</a></li>\n            <li><a href=\"#\" class=\"black-text\">Contact Us</a></li>\n        </ul>\n    </header>\n\n    <router-view></router-view>\n\n    <footer class=\"page-footer blue-grey darken-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col l6 s12\">\n                    <h5 class=\"white-text\">Contact Us</h5>\n                    <form class=\"col s12\">\n                        <div class=\"row\">\n                            <div class=\"input-field col s12\">\n                                <input id=\"name\" type=\"text\" class=\"validate\">\n                                <label for=\"name\">Name</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col s12\">\n                                <input id=\"email\" type=\"email\" class=\"validate\">\n                                <label for=\"email\">Email</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col s12\">\n                                <textarea id=\"textarea\" class=\"materialize-textarea\"></textarea>\n                                <label for=\"textarea\">Message</label>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col l4 offset-l2 s12\">\n                    <h5 class=\"white-text\">Links</h5>\n                    <ul>\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Fencing Ireland</a></li>\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Pentathlon Ireland</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-copyright blue-grey darken-4\">\n            <div class=\"container\">\n                <span class=\"grey-text left\" href=\"#!\">© 2016 Boru Fencing ClubContact the Venue | Tel: 01 555 5555 | Email: <a>info@borufencing.ie</a></span>\n\n                <a class=\"grey-text right\" href=\"#!\">A site by Handsome Software</a>\n\n            </div>\n        </div>\n    </footer>\n</template>\n"; });
define('text!styles/main.css', ['module'], function(module) { module.exports = "@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.25rem; } }\n\n.banner-image {\n  margin-top: 35px; }\n\nheader nav {\n  height: 100px;\n  line-height: 100px; }\n  header nav .logo {\n    display: block;\n    text-indent: -9999px;\n    width: 120px;\n    height: 100px;\n    background: url(/img/logo_club.svg);\n    background-size: 120px 105px; }\n  header nav .button-collapse {\n    margin: 18px; }\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n    <main>\n        <div class=\"banner-image\">\n            <img class=\"responsive-img\" src=\"/img/hero-banner-2.jpg\">\n        </div>\n\n        <section>\n            <div class=\"container\">\n                <h4>Brian Boru Fencing Club</h4>\n                <div class=\"divider\"></div>\n                <div class=\"row\">\n                    <div class=\"col l7 s12 flow-text\">\n                        <p>At Brian Boru Fencing Club we welcome fencers of all ages and abilities, from young to old, and from\n                            serious competitors to enthusiastic recreational fencers.</p>\n                        <p>We are a new friendly foil and epee club looking to make an impact on the Irish Fencing scene.</p>\n                        <p>Led by our coach, the former junior world champion Radu Andrei, we aim to train to the highest of\n                            standards. Our members include domestic and international athletes aspiring to European and World\n                            Championships at cadet, junior and senior level, through to beginners from age 7 and up.</p>\n                        <p>We meet on several days of the week and fence in a purpose built Salle on the National Sports Campus</p>\n                    </div>\n                    <div class=\"col l5 s12\">\n                        <div class=\"card\">\n                            <div class=\"card-content center-align\">\n                                <div class=\"card-header teal \">\n                                    <span class=\"card-title white-text\">Beginner Classes</span>\n                                </div>\n                                <br/>\n                                <p>Our next beginner sessions are starting on 1970/1/1</p>\n                            </div>\n                            <div class=\"card-action center-align\">\n                                <a class=\"waves-effect waves-light teal white-text btn\">More Info</a>\n                            </div>\n                        </div>\n\n                        <div class=\"card\">\n                            <div class=\"card-content center-align\">\n                                <div class=\"card-header teal \">\n                                    <span class=\"card-title white-text\">Taster session</span>\n                                </div>\n                                <br/>\n                                <p>We run free taster sessions from time to time. Check the link below for more information</p>\n                            </div>\n                            <div class=\"card-action center-align\">\n                                <a class=\"waves-effect waves-light teal white-text btn\">More Info</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"divider\"></div>\n            </div>\n        </section>\n    </main>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map