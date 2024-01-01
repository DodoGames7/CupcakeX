module.exports = [{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==menu_$authorID;$selectMenuValues==main]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

    $interactionUpdate[
    $title[Main commands]
    $description[
### About the bot

        \`ping\`, \`version\`, \`stats\`, \`info\`
    ]
    $addActionRow
    $addStringSelectMenu[menu_$authorID;Select a module.;false;1;1]
    $addOption[Main;Default commands;main;;false]
    $addOption[fun;Entertainment commands;fun;;false]
    ]`
},{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==menu_$authorID;$selectMenuValues==fun]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

    $interactionUpdate[
    $title[Fun commands]
    $description[
### Fun stuff
        \`howgay\`, \`say\`
### Games
\`rps\`, \`dice\`
    ]
    $addActionRow
    $addStringSelectMenu[menu_$authorID;Select a module.;false;1;1]
    $addOption[Main;Default commands;main;;false]
    $addOption[Fun;Entertainment commands;fun;;false]
    ]`
}]
