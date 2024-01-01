module.exports = {
    name: "info",
    aliases: "about",
    type: "messageCreate",
    code: `$title[About $getVar[name;$botID]]
    $description[*Seconds turned into minutes then hours then weeks then days and now years... It is time for a new change.*

CupcakeX is a new project developed with the intention of expressing my honest ideas. It is mostly used for hobby purposes compared to Dodo-Bot and several other bots

NOTE: as this is a hobby project however, be aware it won't be taken seriously. Please keep that in mind when using this bot
    ]
    $color[Orange]
$addActionRow
$addButton[https://discord.gg/pFwKjAaZvj;Support;Link]
$addButton[credits_$authorID;Credits;Primary;💝;false]
    `
}
