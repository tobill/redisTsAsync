"use strict";
exports.__esModule = true;
var Redis = require("redis");
var rclient = Redis.createClient();
rclient.keys("*", function (err, replay) {
    if (err)
        console.log(err);
    else
        console.log(replay);
});
