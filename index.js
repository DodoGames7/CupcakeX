const config = require("./config.json");

const { ForgeClient } = require("forgescript")
const { ForgeDB } = require("forgedb")

// Client initialization
   const client = new ForgeClient({
    "intents": [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "DirectMessages"
    ],
    "prefixes": [
        "c!"
    ],
    "events": [
        "ready",
        "interactionCreate",
        "messageCreate"
    ],
    "extensions": [
        new ForgeDB()
    ]
})

// Load the commands
   client.commands.load("commands")

// Your bot token
   client.login(process.env.TOKEN || config.BotToken);

 
