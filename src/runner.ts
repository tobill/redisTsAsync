import * as Redis from "redis"

    let rclient = Redis.createClient();
    rclient.keys("*", (err, replay) =>
      {
        if (err) console.log(err);
        else console.log(replay);
        
        
      });
