import 'app/vendor';
import { app } from 'app/app';
import { layout } from 'views/layout/layout.js';
import { view as home } from 'views/home/home.js';
import { view as details } from 'views/details/details.js';

var router = new kendo.Router({
    init: function () {
        
        // render the layout first
        layout.render("#applicationHost");
    },
    routeMissing: function (e) {
        
        // debug shim writes console errors to the browser dev tools
        debug.error('No Route Found', e.url);
    },
        
    change: function (e) {
            
        // publish an event whenever the route changes
        app.ee.emit('/router/change', e);
    }
});

// Add new routes here...
    
router.route('/', function (e) {
    layout.showIn("#content", home);
});

router.route('/details', function (e) {
    layout.showIn("#content", details);
});

export { router };