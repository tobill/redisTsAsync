import * as redis from 'redis';  

declare module "redis" {
    
    export interface RedisClient extends NodeJS.EventEmitter {
        getAsync(key: string): Promise<string>;
        getbitAsync(key: string, offset: number) : Promise<number>;
        getrangeAsync(key: string, start: number, end: number) : Promise<string>;
        getsetAsync(key: string, value: string) : Promise<string>;
        hdelAsync(key: string, fields: string[]) : Promise<number>;
        hexistsAsync(key: string, field: string): Promise<number>;
        hgetAsync(key: string, field: string): Promise<string>
        hgetallAsync(key: string): Promise<{ [key: string]: string }>;
        hmgetAsync(key: string, fields: string[]): Promise<string[]>;
        hsetAsync(key: string, field: string, value: string): Promise<number>;
        hsetnxAsync(key: string, field: string, value: string): Promise<number>;
        setAsync(key: string, values: string): Promise<number>;
    
        // append(key: string, value: string, cb?: Callback<number>): R;
        // bgrewriteaof(cb?: Callback<'OK'>): R;
        // bgsave(cb?: Callback<string>): R;
        // bitcount(key: string, cb?: Callback<number>): R;
        // bitcount(key: string, start: number, end: number, cb?: Callback<number>): R;
        // bitfield: OverloadedKeyCommand<string | number, [number, number], R>;
        // bitop(operation: string, destkey: string, key1: string, key2: string, key3: string, cb?: Callback<number>): R;
        // bitop(operation: string, destkey: string, key1: string, key2: string, cb?: Callback<number>): R;
        // bitop(operation: string, destkey: string, key: string, cb?: Callback<number>): R;
        // bitop(operation: string, destkey: string, ...args: (string | Callback<number>)[]): R;
        // bitpos(key: string, bit: number, start: number, end: number, cb?: Callback<number>): R;
        // bitpos(key: string, bit: number, start: number, cb?: Callback<number>): R;
        // bitpos(key: string, bit: number, cb?: Callback<number>): R;
        // blpop: OverloadedLastCommand<string, number, [string, string], R>;
        // brpop: OverloadedLastCommand<string, number, [string, string], R>;
        // brpoplpush(source: string, destination: string, timeout: number, cb?: Callback<[string, string]>): R;
        // cluster: OverloadedCommand<string, any, this>;
        // command(cb?: Callback<Array<[string, number, string[], number, number, number]>>): R;
        // config: OverloadedCommand<string, boolean, R>;
        // dbsize(cb?: Callback<number>): R;
        // debug: OverloadedCommand<string, boolean, R>;
        // decr(key: string, cb?: Callback<number>): R;
        // decrby(key: string, decrement: number, cb?: Callback<number>): R;
        // del: OverloadedCommand<string, number, R>;
        // discard(cb?: Callback<'OK'>): R;
        // dump(key: string, cb?: Callback<string>): R;
        // echo<T extends string>(message: T, cb?: Callback<T>): R;
        // eval: OverloadedCommand<string | number, any, R>;
        // evalsha: OverloadedCommand<string | number, any, R>;
        // exists: OverloadedCommand<string, number, R>;
        // expire(key: string, seconds: number, cb?: Callback<number>): R;
        // expireat(key: string, timestamp: number, cb?: Callback<number>): R;
        // flushall(cb?: Callback<string>): R;
        // flushdb(cb?: Callback<string>): R;
        // geoadd: OverloadedKeyCommand<string | number, number, R>;
        // geohash: OverloadedKeyCommand<string, string, R>;
        // geopos: OverloadedKeyCommand<string, Array<[number, number]>, R>;
        // geodist: OverloadedKeyCommand<string, string, R>;
        // georadius: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;
        // georadiusbymember: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;
        // hincrby(key: string, field: string, increment: number, cb?: Callback<number>): R;
        // hincrbyfloat(key: string, field: string, increment: number, cb?: Callback<number>): R;
        // hkeys(key: string, cb?: Callback<string[]>): R;
        // hlen(key: string, cb?: Callback<number>): R;
        // hmget: OverloadedKeyCommand<string, string[], R>;
        // hset(key: string, field: string, value: string, cb?: Callback<number>): R;
        // hsetnx(key: string, field: string, value: string, cb?: Callback<number>): R;
        // hstrlen(key: string, field: string, cb?: Callback<number>): R;
        // hvals(key: string, cb?: Callback<string[]>): R;
        // incr(key: string, cb?: Callback<string[]>): R;
        // incrby(key: string, increment: number, cb?: Callback<string[]>): R;
        // incrbyfloat(key: string, increment: number, cb?: Callback<string[]>): R;
        // keys(pattern: string, cb?: Callback<string[]>): R;
        // lastsave(cb?: Callback<number>): R;
        // lindex(key: string, index: number, cb?: Callback<string>): R;
        // linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string, cb?: Callback<string>): R;
        // llen(key: string, cb?: Callback<number>): R;
        // lpop(key: string, cb?: Callback<string>): R;
        // lpush: OverloadedKeyCommand<string, number, R>;
        // lpushx(key: string, value: string, cb?: Callback<number>): R;
        // lrange(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
        // lrem(key: string, count: number, value: string, cb?: Callback<number>): R;
        // lset(key: string, index: number, value: string, cb?: Callback<'OK'>): R;
        // ltrim(key: string, start: number, stop: number, cb?: Callback<'OK'>): R;
  


    }

}