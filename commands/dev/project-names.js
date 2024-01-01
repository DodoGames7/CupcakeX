module.exports = {
name: "project-names",
aliases: "undercover",
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID;$authorID]==true;Looks like you're not dev of this bot.]
$title[Undercover]
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
$addOption[Askers;The time when akinators were good.;askers;🌘;false]`
}