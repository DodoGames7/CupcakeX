module.exports = [{
type: "interactionCreate",
code: `$onlyIf[$customID==credits_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]
$interactionUpdate[$title[Credits]
$description[
### CupcakeX
* $username[632607624742961153] - Developer of the bot
### Previous Projects
* $username[632607624742961153] - Developer of the bot (Dodo-Bot v2)
* $username[431749535656837130] - inspiration to improve some commands (Dodo-Bot v2)
* $username[1128164873554112513] - previous help in the bot (Dodo-Bot v1)
* $username[1128164873554112513] - helpful suggestions for new bot's stuffs (Askers v1)
]
$color[Orange]
$addActionRow
$addButton[info_$authorID;Home;Secondary;🏠]
$addButton[credits_$authorID;Credits;Primary;💝;true]
$addButton[packages_$authorID;Packages;Primary]
]`

},{
type: "interactionCreate",
code: `$onlyIf[$customID==packages_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]
$interactionUpdate[$title[Packages]
$description[
* **forgescript**: This entire project is made in fs!
* **forgeDB**: For loading variables in fs.
]
$color[Orange]
$addActionRow
$addButton[info_$authorID;Home;Secondary;🏠]
$addButton[credits_$authorID;Credits;Primary;💝;false]
$addButton[packages_$authorID;Packages;Primary;;true]
]`

},{
type: "interactionCreate",
code: `$onlyIf[$customID==info_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]


$interactionUpdate[
$title[About $getVar[name;$botID]]
    $description[*Seconds turned into minutes then hours then weeks then days and now years... It is time for a new change.*

CupcakeX is a new project developed with the intention of expressing my honest ideas. It is mostly used for hobby purposes compared to Dodo-Bot and several other bots

NOTE: This is a hobby project and so it won't be taken seriously. Please keep that in mind when using this bot
    ]
    $color[Orange]
$addActionRow
$addButton[https://discord.gg/pFwKjAaZvj;Support;Link]
$addButton[credits_$authorID;Credits;Primary;💝;false]]`
}]