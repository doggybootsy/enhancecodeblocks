export type accessibility = {
  readonly public isAccessibilitySupportEnabled(): Promise<boolean>
};
export type app = {
  readonly public dock: {
    readonly public bounce(type: "critical" | "informational"): Promise<number>,
    readonly public cancelBounce(id: number): void,
    readonly public setBadge(text: string): void
  },
  readonly public  getBuildNumber(): number,
  readonly public getDefaultDoubleClickAction(): unknown,
  readonly public getModuleVersions(): {
    discord_cloudsync: number
    discord_desktop_core: number
    discord_dispatch: number
    discord_erlpack: number
    discord_game_utils: number
    discord_hook: number
    discord_krisp: number
    discord_media: number
    discord_modules: number
    discord_overlay2: number
    discord_rpc: number
    discord_spellcheck: number
    discord_utils: number
    discord_voice: number
  },
  readonly public getPath(path: "home" | "appData" | "desktop" | "documents" | "downloads" | "crashDumps"): string,
  readonly public getReleaseChannel(): string,
  readonly public getVersion(): string,
  readonly public registerUserInteractionHandler(elementId: string, event: string, callback: (({ isTrusted }: { isTrusted: true }) => void)): () => void,
  readonly public relaunch(): void,
  readonly public setBadgeCount(amount: number): Promise<void>
};
export type clipboard = {
  readonly public copy(text: string): void,
  readonly public copyImage(imageArrayBuffer: Uint8Array, imageSrc: string): void,
  readonly public cut(): void,
  readonly public paste(): void,
  readonly public read(): string
};
export type fileManager = {
  /** @note ext is the file extension of the path */
  readonly public basename(path: string, ext: string): string
  readonly public cleanupTempFiles(): void,
  readonly public dirname(path: string): string,
  readonly public extname(path: string): string,
  readonly public getCrashFiles(): Promise<unknown>,
  readonly public getModuleDataPathSync(): string,
  readonly public getModuleDataPath(): Promise<string>,
  readonly public join(...paths: string[]): string,
  readonly public openFiles(dialogOptions: {
    filters: { name: string, extensions: string[] }[],
    properties: string[]
  }, maxSize: number): Promise<{
    data: Uint8Array,
    filename: string
  }[]>,
  readonly public readLogFiles(maxSize: number): Promise<unknown>,
  readonly public readTimeSeriesLogFiles(maxSize: number, blindChannelId: string): Promise<unknown>,
  readonly public saveWithDialog(content: string, filename: string): Promise<void>,
  readonly public showItemInFolder(path: string): Promise<void>,
  readonly public showOpenDialog(dialogOptions: {
    filters: { name: string, extensions: string[] }[],
    properties: string[]
  }): Promise<{
    data: Uint8Array,
    filename: string
  }[]>
};
export type gpuSettings = {
  readonly public getEnableHardwareAcceleration(): boolean
  readonly public getEnableHardwareAcceleration(enable: boolean): void
};
export type http = {
  readonly public getAPIEndpoint(): Promise<string>,
  readonly public makeChunkedRequest(route: string, chunks: string[], options: {
    method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH",
    chunkInterval: number,
    token: string,
    contentType: string
  }, callback: (err: Error | null, body: unknown) => void): Promise<unknown>
};
export type ipc = {
  readonly public invoke(ev: string, ...args: any[]): Promise<unknown>,
  readonly public on(ev: string, callback: (...data: any[]) => void): void,
  readonly public send(ev: string, ...args: any[]): Promise<unknown>
};
export type isRenderer = boolean;
export type nativeModules = {
  readonly public canBootstrapNewUpdater: boolean,
  readonly public ensureModule(name: string): Promise<void>,
  readonly public requireModule(name: string): any
};
export type os = {
  readonly public arch: string,
  readonly public release: string
};
export type powerMonitor = {
  readonly public getSystemIdleTimeMs(): Promise<number>,
  readonly public on(ev: string, callback: (...data: any[]) => void): void,
  readonly public removeAllListeners(ev: string): void,
  readonly public removeListener(ev: string, callback: (...data: any[]) => void): void
};
export type powerSaveBlocker = {
  readonly public blockDisplaySleep(): Promise<number>,
  readonly public cleanupDisplaySleep(): Promise<void>,
  readonly public unblockDisplaySleep(id: number): Promise<void>
};
export type process = {
  readonly public arch: string,
  readonly public env: {
    readonly public DISCORD_DISALLOW_POPUPS: string | undefined,
    readonly public DISCORD_GATEWAY_PLAINTEXT: string | undefined,
    readonly public DISCORD_TEST: string | undefined,
    readonly public LOCALAPPDATA: string | undefined,
    readonly public PROGRAMDATA: string | undefined,
    readonly public PROGRAMFILES: string | undefined,
    readonly public "PROGRAMFILES(X86)": string | undefined,
    readonly public PROGRAMW6432: string | undefined
  },
  readonly public platform: string
};
export type processUtils = {
  readonly public flushDNSCache(callback: () => void): Promise<void>,
  readonly public flushCookies(): Promise<void>,
  readonly public getLastCrash(): Promise<unknown>,
  readonly public flushStorageData(callback: () => void): Promise<void>,
  readonly public purgeMemory(): void,
  readonly public getCurrentCPUUsagePercent(): number,
  readonly public getCurrentMemoryUsageKB(): number,
  readonly public getCPUCoreCount(): number,
  readonly public getMainArgvSync(): [ string ]
};
export type remoteApp = app;
export type remotePowerMonitor = powerMonitor;
export type safeStorage = {
  readonly public decryptString(encrypted: string): string,
  readonly public encryptString(plainText: string): string,
  readonly public isEncryptionAvailable(): boolean
};
export type setUncaughtExceptionHandler = (handler: Function) => void;
export type settings = {
  readonly public get(name: string, defaultValue: any): Promise<any>,
  readonly public getSync(name: string, defaultValue: any): any,
  readonly public set(name: string, value: any): Promise<void>
};
export type spellCheck = {
  readonly public getAvailableDictionaries(): Promise<string>
  readonly public on(ev: string, callback: (...data: any[]) => void): void,
  readonly public removeListener(ev: string, callback: (...data: any[]) => void): void
  readonly public replaceMisspelling(correction: string): Promise<void>,
  readonly public setLearnedWords(learnedWords: string[]): Promise<void>,
  readonly public setLocale(locale: string): Promise<boolean>
};
export type thumbar = {
  readonly public setThumbarButtons(buttons: {
    tooltip: string,
    icon: string,
    /** @note UNKNOWN! */
    click(): void
  }[], isSystemDarkMode: boolean): Promise<void>
};
export type userDataCache = {
  readonly public cacheUserData(userData: string): void,
  readonly public deleteCache(): void,
  readonly public getCached(): Promise<void>
};
export type userDataCache = {
  /** @note Should always be {true} */
  readonly public USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean
  readonly public blur(key: number): Promise<void>,
  readonly public close(key: number): Promise<void>,
  readonly public flashFrame(flag: boolean): Promise<void>,
  readonly public focus(_hack: void, key, number): Promise<void>,
  readonly public fullscreen(key: number): Promise<void>,
  readonly public isAlwaysOnTop(key: number): Promise<void>,
  readonly public maximize(key: number): Promise<void>,
  readonly public minimize(key: number): Promise<void>,
  readonly public restore(key: number): Promise<void>,
  readonly public setAlwaysOnTop(key: number, enabled: boolean): Promise<void>,
  readonly public setBackgroundThrottling(enabled: boolean): Promise<void>,
  readonly public setDevtoolsCallbacks(onOpened: () => void, onClosed: () => void): Promise<void>,
  readonly public setProgressBar(progress: number, key: number): Promise<void>,
  readonly public setZoomFactor(factor: number): Promise<void>
};

export type DiscordNative = {
  readonly public accessibility: accessibility,
  readonly public app: app,
  readonly public clipboard: clipboard,
  readonly public fileManager: fileManager,
  readonly public gpuSettings: gpuSettings,
  readonly public http: http,
  readonly public ipc: ipc,
  readonly public isRenderer: isRenderer,
  readonly public nativeModules: nativeModules,
  readonly public os: os,
  readonly public powerMonitor: powerMonitor,
  readonly public powerSaveBlocker: powerSaveBlocker,
  readonly public process: process,
  readonly public processUtils: processUtils,
  readonly public remoteApp: remoteApp,
  readonly public remotePowerMonitor: remotePowerMonitor,
  readonly public safeStorage: safeStorage,
  readonly public setUncaughtExceptionHandler: setUncaughtExceptionHandler,
  readonly public settings: settings,
  readonly public spellCheck: spellCheck,
  readonly public thumbar: thumbar,
  readonly public userDataCache: userDataCache,
  readonly public window: userDataCache
}

declare global {
  interface Window {
    readonly public DiscordNative?: DiscordNative
  }
}