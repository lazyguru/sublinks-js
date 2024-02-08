export type Post = {
  id: number;
  name: string;
  url: string;
  body: string;
  creator_id: number;
  community_id: number;
  removed: boolean;
  locked: boolean;
  published: string;
  updated: string;
  deleted: boolean;
  nsfw: boolean;
  embed_title: string;
  embed_description: string;
  thumbnail_url: string;
  ap_id: string;
  local: boolean;
  embed_video_url: string;
  language_id: number;
  featured_community: boolean;
  featured_local: boolean;
};
