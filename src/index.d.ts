import "../typings/module";
import "../typings/hljs";
// Only type what i need
type DiscordNative = {
  readonly public fileManager: { readonly public saveWithDialog: (content: string, filename: string) => void }
  readonly public clipboard: { readonly public copy: (content: string) => void }
}

declare global {
  interface Window {
    readonly public DiscordNative: DiscordNative
  }
}