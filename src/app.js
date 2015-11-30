export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'Welome', moduleId: 'Welcome', nav: true, title: 'Welcome'},
            { route: 'users', name: 'Users', moduleId: 'Users', nav: true, title: 'GitHub Users'}
        ]);

        this.router = router;
    }
}
