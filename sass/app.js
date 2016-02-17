// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
    server: "./app"
});

// Listen to change events on HTML and reload
bs.watch("app/*.html").on("change", bs.reload);