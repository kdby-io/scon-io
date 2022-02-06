import { schedule } from '@netlify/functions';
import fetch from 'node-fetch'

const API_ENDPOINT = 'https://p8d.io'

// To learn about scheduled functions and supported cron extensions, 
// see: https://ntl.fyi/sched-func
export const handler = schedule("*/3 * * * *", async (event) => {
    try {
      await fetch(API_ENDPOINT)
      // handle response
    } catch (err) {}
  
    const eventBody = JSON.parse(event.body);
    console.log(`Next function run at ${eventBody.next_run}.`);

    return {
        statusCode: 200
    };
});
