module.exports = [{
type: "interactionCreate",
code: `$onlyIf[$customID==changes_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[
$author[Changelog center;$userAvatar[$botID];https://www.youtube.com/watch?v=dQw4w9WgXcQ]
$title[Changes]
$description[
* Setup database in case the data isn't present
* First public build. Nothing much
]
$color[Orange]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Primary;;true]
$addButton[fixes_$authorID;Bug Fixes;Success]
$addButton[other_$authorID;Other;Secondary]
]`
},{
    type:"interactionCreate",
    code: `
$onlyIf[$customID==fixes_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[
$author[Changelog center;$userAvatar[$botID];https://www.youtube.com/watch?v=dQw4w9WgXcQ]
$title[Bug Fixes]
$description[
*There're no bug fixes currently. Check back later for new releases!*
]
$color[Orange]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Primary]
$addButton[fixes_$authorID;Bug Fixes;Success;;true]
$addButton[other_$authorID;Other;Secondary]
]`
},{
    type:"interactionCreate",
    code: `
$onlyIf[$customID==other_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[
$author[Changelog center;$userAvatar[$botID];https://www.youtube.com/watch?v=dQw4w9WgXcQ]
$title[Other]
$description[
* Disable author-only errors
]
$color[Orange]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Primary]
$addButton[fixes_$authorID;Bug Fixes;Success]
$addButton[other_$authorID;Other;Secondary;;true]
]`
},{
    type:"interactionCreate",
    code: `
$onlyIf[$customID==return_$authorID;]
$textSplit[$customID;_]

$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[
$author[Changelog center;$userAvatar[$botID];https://www.youtube.com/watch?v=dQw4w9WgXcQ]
$title[Version Details]
    $description[
* **Release**: 1.0.0
* **Release type**: beta
* **Date of the Build**: 1/1/24

  ⚠️ **For testing purposes only** ⚠️
    ]
$footer[Build: $getVar[buildNumber;$botID]]
    $color[Orange]
    $addActionRow
    $addButton[changes_$authorID;Changes;Primary]
    $addButton[fixes_$authorID;Bug Fixes;Success]
    $addButton[other_$authorID;Other;Secondary]
]`
}]
