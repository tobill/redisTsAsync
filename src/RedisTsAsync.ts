
import * as Redis from 'Redis'

interface RedisConfig {
    port?: number;
    host?: string
}

class RedisTsAsync {
    config: RedisConfig;
    client: Redis.RedisClient;

    constructor(config: RedisConfig) {
        this.config = {}
        this.config.host = !config.host ? "127.0.0.1" : config.host;
        this.config.port = !config.port ? 6379 : config.port;
       
        this.client = Redis.createClient(config.port, config.host, {});
    }   

    keys(pattern: string): Promise<string[]> 
    {
        return  new Promise<string[]>(
            (resolve, reject) => {
                this.client.keys(pattern, (err, reply) =>
                 {
                    if (err) reject(err);
                    else resolve(reply);
                 });
            }
        );
    }
}


function createClient(config: RedisConfig): RedisTsAsync {
    return new RedisTsAsync(config);
}

export { RedisConfig, RedisTsAsync, createClient }