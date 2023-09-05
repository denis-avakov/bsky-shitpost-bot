import 'dotenv/config';

import Bot from '~/lib/bot.js';
import { accounts } from '~/lib/accounts.js';
import { getRandom } from '~/lib/utils.js';

const shitpostBot = new Bot();

for (const account of accounts) {
  const result = await shitpostBot.run(getRandom(account.posts), account);
  console.log('Post successfully sent:', result);
}
