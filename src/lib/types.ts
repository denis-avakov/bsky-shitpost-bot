export type BotOptions = {
  /** Bluesky identifier */
  identifier?: string;

  /** Bluesky password */
  password?: string;

  /** Run command but not the actual request */
  dryRun?: boolean;
};

export type EmbedImage = {
  /** Image local path */
  src: string;

  /** Image alt attribute */
  alt: string;
};

export type PostItem = {
  /** Post message */
  message?: string;

  /** Post images */
  images?: EmbedImage[];

  /** The series of connected posts (feature coming in the future) */
  thread?: Omit<PostItem, 'thread'>;
};
