import type { AtpAgentLoginOpts, AppBskyFeedPost, AppBskyEmbedImages } from '@atproto/api';
import type { BotOptions, PostItem } from '~/utils/types.js';

import atproto from '@atproto/api';
import sharp from 'sharp';

const { BskyAgent, RichText } = atproto;

export default class Bot {
  #agent;

  static defaultOptions: BotOptions = {
    dryRun: false
  } as const;

  constructor() {
    this.#agent = new BskyAgent({
      service: 'https://bsky.social'
    });
  }

  login(loginOpts: AtpAgentLoginOpts) {
    return this.#agent.login(loginOpts);
  }

  async post(post: PostItem) {
    const payload: Partial<AppBskyFeedPost.Record> = {
      $type: 'app.bsky.feed.post',
      text: ''
    };

    if (post.text) {
      const richText = new RichText({ text: post.text });
      await richText.detectFacets(this.#agent);

      payload.text = richText.text;
      payload.facets = richText.facets;
    }

    if (post.pathList) {
      const embed: AppBskyEmbedImages.Main = {
        $type: 'app.bsky.embed.images',
        images: []
      };

      for (const imagePath of post.pathList) {
        const imageBuffer = await sharp(imagePath).resize(400).toFormat('png').toBuffer();
        const uploaded = await this.#agent.uploadBlob(imageBuffer, {
          encoding: 'image/png'
        });

        embed.images.push({
          image: uploaded.data.blob,
          alt: ''
        });
      }

      payload.embed = embed;
    }

    return this.#agent.post(payload);
  }

  async run(post: PostItem, botOptions?: Partial<BotOptions>) {
    const { identifier, password, dryRun } = {
      ...Bot.defaultOptions,
      ...botOptions
    };

    if (!identifier || !password) {
      throw new Error('Credentials are not specified ☹️');
    }

    const bot = new Bot();
    await bot.login({ identifier, password });

    if (!dryRun && post) {
      await bot.post(post);
    }

    return post;
  }
}
