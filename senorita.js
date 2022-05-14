const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");

client.on("ready", async () => {
  let sesliKanalID = client.channels.cache.get("937698197684502577");
  if (sesliKanalID)
    sesliKanalID.join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
