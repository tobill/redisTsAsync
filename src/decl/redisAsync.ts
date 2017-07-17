
import * as redis from 'redis';  //Has ambient declaration from DT



declare module "redis" {
    

    export interface RedisClient extends NodeJS.EventEmitter {
        setAsync(key:string, value:string): Promise<void>;
        getAsync(key:string): Promise<string>;
        quitAsync(): Promise<void>;
    }

}