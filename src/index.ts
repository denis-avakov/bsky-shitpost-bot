import 'dotenv/config';

import Bot from '~/lib/bot.js';
import { accounts } from '~/lib/accounts.js';
import { getPost } from '~/lib/utils.js';

const shitpostBot = new Bot();

for (const account of accounts) {
  const currentPost = await getPost(account.id);
  const result = await shitpostBot.run(currentPost, account);

  console.log('Post successfully sent:', result);
}
