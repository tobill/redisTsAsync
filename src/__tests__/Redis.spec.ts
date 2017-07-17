import * as redis from 'redis';  //Has ambient declaration from DT


import bluebird = require('bluebird');  //Has ambient declaration from DT



bluebird.promisifyAll((<any>redis).RedisClient.prototype);
bluebird.promisifyAll((<any>redis).Multi.prototype);

let rc = redis.createClient(6379, '192.168.56.2');

rc.getAsync('*');


rc.quitAsync();


