import "../typings/module";
import "../typings/hljs";

type DiscordNative = {
  fileManager: { saveWithDialog: (content: string, filename: string) => void }
  clipboard: { copy: (content: string) => void }
}

declare global {
  interface Window {
    DiscordNative: DiscordNative
  }
}