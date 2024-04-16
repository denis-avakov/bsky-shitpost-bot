// Read about how to use Keystatic configuration
// https://keystatic.com/docs/configuration

import { createElement } from 'react';
import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    nocontextscats: collection({
      label: '@nocontextscats.bsky.social',
      slugField: 'postId',
      path: 'src/content/nocontextscats/*/',
      format: {
        data: 'json'
      },
      schema: {
        content: fields.text({
          label: 'Content'
        }),
        image1: fields.image({
          label: 'Attachment'
        }),
        image2: fields.image({
          label: 'Attachment'
        }),
        image3: fields.image({
          label: 'Attachment'
        }),
        image4: fields.image({
          label: 'Attachment'
        }),
        postId: fields.slug({
          name: {
            label: 'Post ID',
            defaultValue: new Date().getTime().toString()
          }
        })
      }
    })
  },
  ui: {
    brand: {
      name: 'Bluesky Shitpost Bot',
      mark: () => createElement('img', { src: '/favicon.svg', width: 32 })
    }
  }
});
