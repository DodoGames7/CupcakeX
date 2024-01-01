module.exports = [{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==nameoftheproject_$authorID;$selectMenuValues==cupcakex]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$onlyIf[$getVar[name;$botID]!=CupcakeX;
$interactionReply[It's already selected.
$ephemeral]
]
$interactionUpdate[$title[Undercover]
$description[This command changes the bot name displayed across many areas of the cmds. This is made so that, devs has the freedom of what they can do with the project!

This command is just made for hobby purposes so don't expect much use of it's functionality
]
$color[Orange]
$addActionRow
$addStringSelectMenu[nameoftheproject_$authorID;Select an available project name.;false;1;1]
$addOption[CupcakeX;The real project name.;cupcakex;🧁;false]
$addOption[Dodo-Bot;Dodo bird is still alive as an bot!;dodobot;🌎;false]
$addOption[Epik man;The legend of the frozen man never dies truly!;epikman;🥶;false]
$addOption[Miney;When dodo tried to beat minecrafter with his own version.;miney;🟧;false]
$addOption[Askers;The time when akinators were good.;askers;🌘;false]
]
$setVar[name;$botID;CupcakeX]
$interactionFollowUp[Changed the project's name to \`CupcakeX\`.
$ephemeral
]`
},{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==nameoftheproject_$authorID;$selectMenuValues==dodobot]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$onlyIf[$checkContains[$getVar[name;$botID];Dodo-Bot]==false;
$interactionReply[It's already selected.
$ephemeral]
]
$interactionUpdate[$title[Undercover]
$description[This command changes the bot name displayed across many areas of the cmds. This is made so that, devs has the freedom of what they can do with the project!

This command is just made for hobby purposes so don't expect much use of it's functionality
]
$color[Orange]
$addActionRow
$addStringSelectMenu[nameoftheproject_$authorID;Select an available project name.;false;1;1]
$addOption[CupcakeX;The real project name.;cupcakex;🧁;false]
$addOption[Dodo-Bot;Dodo bird is still alive as an bot!;dodobot;🌎;false]
$addOption[Epik man;The legend of the frozen man never dies truly!;epikman;🥶;false]
$addOption[Miney;When dodo tried to beat minecrafter with his own version.;miney;🟧;false]
$addOption[Askers;The time when akinators were good.;askers;🌘;false]
]
$setVar[name;$botID;Dodo-Bot]
$interactionFollowUp[Changed the project's name to \`Dodo-Bot\`.
$ephemeral
]`
},{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==nameoftheproject_$authorID;$selectMenuValues==epikman]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$onlyIf[$checkContains[$getVar[name;$botID];Epik-man]==false;
$interactionReply[It's already selected.
$ephemeral]
]
$interactionUpdate[$title[Undercover]
$description[This command changes the bot name displayed across many areas of the cmds. This is made so that, devs has the freedom of what they can do with the project!

This command is just made for hobby purposes so don't expect much use of it's functionality
]
$color[Orange]
$addActionRow
$addStringSelectMenu[nameoftheproject_$authorID;Select an available project name.;false;1;1]
$addOption[CupcakeX;The real project name.;cupcakex;🧁;false]
$addOption[Dodo-Bot;Dodo bird is still alive as an bot!;dodobot;🌎;false]
$addOption[Epik man;The legend of the frozen man never dies truly!;epikman;🥶;false]
$addOption[Miney;When dodo tried to beat minecrafter with his own version.;miney;🟧;false]
$addOption[Askers;The time when akinators were good.;askers;🌘;false]
]
$setVar[name;$botID;Epik-man]
$interactionFollowUp[Changed the project's name to \`Epik-man\`.
$ephemeral
]`
},{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==nameoftheproject_$authorID;$selectMenuValues==miney]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$onlyIf[$checkContains[$getVar[name;$botID];Miney]==false;
$interactionReply[It's already selected.
$ephemeral]
]
$interactionUpdate[$title[Undercover]
$description[This command changes the bot name displayed across many areas of the cmds. This is made so that, devs has the freedom of what they can do with the project!

This command is just made for hobby purposes so don't expect much use of it's functionality
]
$color[Orange]
$addActionRow
$addStringSelectMenu[nameoftheproject_$authorID;Select an available project name.;false;1;1]
$addOption[CupcakeX;The real project name.;cupcakex;🧁;false]
$addOption[Dodo-Bot;Dodo bird is still alive as an bot!;dodobot;🌎;false]
$addOption[Epik man;The legend of the frozen man never dies truly!;epikman;🥶;false]
$addOption[Miney;When dodo tried to beat minecrafter with his own version.;miney;🟧;false]
$addOption[Askers;The time when akinators were good.;askers;🌘;false]
]
$setVar[name;$botID;Miney]
$interactionFollowUp[Changed the project's name to \`Miney\`.
$ephemeral
]`
},{
    type: "interactionCreate",
    code: `
$onlyIf[$and[$customID==nameoftheproject_$authorID;$selectMenuValues==askers]==true;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$onlyIf[$checkContains[$getVar[name;$botID];Askers]==false;
$interactionReply[It's already selected.
$ephemeral]
]
$interactionUpdate[$title[Undercover]
$description[This command changes the bot name displayed across many areas of the cmds. This is made so that, devs has the freedom of what they can do with the project!

This command is just made for hobby purposes so don't expect much use of it's functionality
]
$color[Orange]
$addActionRow
$addStringSelectMenu[nameoftheproject_$authorID;Select an available project name.;false;1;1]
$addOption[CupcakeX;The real project name.;cupcakex;🧁;false]
$addOption[Dodo-Bot;Dodo bird is still alive as an bot!;dodobot;🌎;false]
$addOption[Epik man;The legend of the frozen man never dies truly!;epikman;🥶;false]
$addOption[Miney;When dodo tried to beat minecrafter with his own version.;miney;🟧;false]
$addOption[Askers;The time when akinators were good.;askers;🌘;false]
]
$setVar[name;$botID;Askers]
$interactionFollowUp[Changed the project's name to \`Askers\`.
$ephemeral
]`
}]