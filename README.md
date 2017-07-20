# Typescript Declaration for using redis withc async function

WIP
Not all 'redis'-functions are declared

> Usage

```Javascript
import * as redis from 'redis';
import 'redis-ts-async';
import * as bluebird from 'bluebird'

bluebird.promisifyAll((<any>redis).RedisClient.prototype);
bluebird.promisifyAll((<any>redis).Multi.prototype)

let r = redis.createClient();

r.hsetAsync('teset', 'val2', 'tes2').then(
    function(err) {
        console.log(err)
    },
    function (reply) {
        console.log(reply);
    });
});
```