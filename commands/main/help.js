module.exports = {
    name: "help",
    type: "messageCreate",
    code: `$title[Help Menu]
    $description[Check out the menu's options for available commands
    ]
$footer[Report bugs if found.]
$color[Orange]
    $addActionRow
    $addStringSelectMenu[menu_$authorID;Select a module.;false;1;1]
    $addOption[Main;Default commands;main;;false]
    $addOption[Fun;Entertainment commands;fun;;false]
    `
}
