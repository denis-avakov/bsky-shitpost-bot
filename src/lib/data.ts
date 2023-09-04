import type { Post } from './types.js';

type DataSources = {
  [key: string]: Post[];
};

export function getRandom(posts: Post[]) {
  return posts[Math.floor(Math.random() * posts.length)];
}

export const sources = {
  nocontextscats: [
    {
      pathList: ['./assets/nocontextscats/FctJzdIaIAAnjJa.jfif']
    },
    {
      text: 'soooo eepy...',
      pathList: ['./assets/nocontextscats/F5JXeA6WoAAwsdo.jfif']
    },
    {
      pathList: [
        './assets/nocontextscats/F5KqF8OacAACVp1.jfif',
        './assets/nocontextscats/F5KqGvca0AAOL9K.jfif'
      ]
    },
    {
      pathList: ['./assets/nocontextscats/F5IdG9BXsAAidUH.jfif']
    },
    {
      text: 'CHONK',
      pathList: ['./assets/nocontextscats/F5HOvZhbUAA8HDp.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F5ISWMdXAAAxZHN.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F5HpO3wXIAADgEO.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F5FV40_XEAE_Vlp.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F49C8_-XsAEhmld.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/5f0d1495d0193840c988fb70f29e892e.png']
    },
    {
      pathList: ['./assets/nocontextscats/8a5ace3c6a8d5716c29ede39aa684bdc.png']
    },
    {
      pathList: [
        './assets/nocontextscats/017ea0a7f27f4ecb8b2d851b61e793cc_tplv-photomode-image.jpeg'
      ]
    },
    {
      pathList: ['./assets/nocontextscats/37_izCY1rQg.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/38dc3d4b8a79cc77d2145af11433e110.png']
    },
    {
      pathList: ['./assets/nocontextscats/364133096_1104440487626666_8716572880284943559_n.jpg']
    },
    {
      pathList: [
        './assets/nocontextscats/c78b001c568d48d79101d4b2e08f5ff7_tplv-photomode-image.jpeg'
      ]
    },
    {
      pathList: ['./assets/nocontextscats/CCGgaJ4uPE4.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/CmgH4vqpf3O_0.jpeg']
    },
    {
      pathList: ['./assets/nocontextscats/E5oOJFJWEAg3Osa.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/E6SmtQJVoAEUrdf.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/F0jO0IsWwAEsp7Z.png']
    },
    {
      pathList: ['./assets/nocontextscats/F0nadPpaAAAuVNE.png']
    },
    {
      pathList: ['./assets/nocontextscats/F2_SMJjWgAAT_vM.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F4SdB7SWEAAcR0l.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F4TZmMLaIAAUt9E.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F11i9jVXgAIoVWh.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/F47x9f-bIAAsITb.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/F4468hkbUAASiOY.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/FsZtfoTXwBMZge0.jfif']
    },
    {
      pathList: ['./assets/nocontextscats/Ft4FvcMWYAI6iju.png']
    },
    {
      pathList: ['./assets/nocontextscats/Fz5daBiWIAA7-8K.png']
    },
    {
      pathList: ['./assets/nocontextscats/gnP2CL0ADlM.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/GRlJtUzlhMI.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/IAjckwOLqmE.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/IAjcksagasgLqmE.png']
    },
    {
      pathList: ['./assets/nocontextscats/IUA4IlIxaAU.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/onAwDioavjQ.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/Pkw-5C5rEn8.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/qYc9z90k57k.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/vf_HyZVaTH0.jpg']
    },
    {
      pathList: ['./assets/nocontextscats/Y64WCxzhptE.jpg']
    }
  ]
} satisfies DataSources;
