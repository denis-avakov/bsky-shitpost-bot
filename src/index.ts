import 'dotenv/config';

import { accounts } from './lib/env.js';
import { sources, getRandom } from '~/lib/data.js';
import Bot from '~/lib/bot.js';

const shitpostBot = new Bot();

for (const account of accounts) {
  const post = getRandom(sources[account.name]);
  const result = await shitpostBot.run(post, account);

  console.log('Post successfully sent:', result);
}
