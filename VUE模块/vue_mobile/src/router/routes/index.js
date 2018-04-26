const files = require.context('.', false, /\.js$/);
let routes = [];

files.keys().forEach((key) => {
    if (key === './index.js') return;
    routes = routes.concat(files(key).default);
});

routes.concat([{
    path: '*',
    redirect: '/'
}]);

export default routes;
