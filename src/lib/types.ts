export type BotOptions = {
  /** Bluesky identifier */
  identifier?: string;

  /** Bluesky password */
  password?: string;

  /** Run command but not the actual request */
  dryRun?: boolean;
};

export type Post = {
  text?: string;
  pathList?: string[];
};
