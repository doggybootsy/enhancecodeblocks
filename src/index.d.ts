import "../typings/module";
import "../typings/hljs";
// Only type what i need
type DiscordNative = {
  fileManager: { saveWithDialog: (content: string, filename: string) => void }
  clipboard: { copy: (content: string) => void }
}

declare global {
  interface Window {
    DiscordNative: DiscordNative
  }
}