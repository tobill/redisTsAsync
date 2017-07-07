import * as RedisTsAsync from "../RedisTsAsync"
import * as Redis from "redis"


it('init redis client', async () => {
    let r = RedisTsAsync.createClient({host: "192.168.56.2"});
    expect(r.config.host).toBe("192.168.56.2");
    expect(r.config.port).toBe(6379);

    const rkeys = await r.keys("*");
    expect(rkeys[0]).toBe("test");
  
  
});
