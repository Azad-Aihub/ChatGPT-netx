export const OWNER = "buy";
export const REPO = "42";
export const REPO_URL = `https://faka.aihub.ren/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://t.zsxq.com/0cy1WzxXu`;
export const UPDATE_URL = `https://t.zsxq.com/0cy1WzxXu`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/Yidadaa/ChatGPT-Next-Web/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/Yidadaa/ChatGPT-Next-Web/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
