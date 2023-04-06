const GUILD_CONSTANT = {
  invite: "yYJA3qQE5F",
  guildId: "864267123694370836"
};

const dispatcher = BdApi.Webpack.getModule(m => m.subscribe && m.dispatch);

const inviteResolver = BdApi.Webpack.getModule(m => m.resolveInvite);

const InviteModalStore = BdApi.Webpack.getModule(m => m.getName?.() === "InviteModalStore");
const { isOpen: originalIsOpen } = InviteModalStore;

const native = BdApi.Webpack.getModule(m => m.minimize && m.requireModule);
const { minimize: originalNative } = native;

const GuildStore = BdApi.Webpack.getModule(m => m.getName?.() === "GuildStore");

const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true });

let cachedInvite: any;
async function getInvite() {
  if (cachedInvite) return cachedInvite;
  try {
    BdApi.UI.showToast(`Resolving invite '${GUILD_CONSTANT.invite}'`, { icon: true, type: "info" });
    const { invite } = await inviteResolver.resolveInvite(GUILD_CONSTANT.invite, "Desktop Modal");
    cachedInvite = invite;
    return invite;
  } catch (error) {
    BdApi.UI.showToast(`Unable to resolve invite '${GUILD_CONSTANT.invite}'`, { icon: true, type: "danger" });
    console.error(error);
    return false;
  }
};

async function joinGuild() {
  const guild = GuildStore.getGuild(GUILD_CONSTANT.guildId);
  if (guild) {
    BdApi.UI.showToast(`Going to ${guild.name}`, { icon: true, type: "info" });    
    return transitionTo(`/channels/${GUILD_CONSTANT.guildId}`);
  };

  const invite = await getInvite();
  
  if (!invite) return;

  InviteModalStore.isOpen = () => true;
  native.minimize = () => {};

  await dispatcher.dispatch({ type: "INVITE_MODAL_OPEN", invite });

  setTimeout(() => {
    InviteModalStore.isOpen = originalIsOpen;
    native.minimize = originalNative;
  });
};

export default joinGuild;