export type Community = {
  id: number;
  name: string;
  title: string;
  description: string;
  removed: boolean;
  published: string;
  updated: string;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  icon: string;
  banner: string;
  followers_url: string;
  inbox_url: string;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: number;
};
