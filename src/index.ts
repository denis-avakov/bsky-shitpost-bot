import 'dotenv/config';

import Bot from '~/lib/bot.ts';
import { accounts } from '~/lib/accounts.ts';
import { getPost } from '~/lib/utils.ts';

const shitpostBot = new Bot();

for (const account of accounts) {
  const currentPost = await getPost(account.id);
  const result = await shitpostBot.run(currentPost, account);

  console.log('Post successfully sent:', result);
}
