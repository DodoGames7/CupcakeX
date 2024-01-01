module.exports = [{
type: "interactionCreate",
code: `
$onlyIf[$customID==rock_$authorID;]
$textSplit[$customID;_]
$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[$title[Results..]
$description[You choose Rock 🌑. I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]!]
$color[Yellow]
]`
},{
type: "interactionCreate",
code: `
$onlyIf[$customID==paper_$authorID;]
$textSplit[$customID;_]
$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[$title[Results..]
$description[You choose Paper 📰. I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]!]
$color[Yellow]
]`
},{
type: "interactionCreate",
code: `
$onlyIf[$customID==scissors_$authorID;]

$textSplit[$customID;_]
$onlyIf[$splitText[1]==$authorID;
$interactionReply[
You aren't the author of this interaction
$ephemeral
]]

$interactionUpdate[$title[Results..]
$description[You choose Scissors ✂️. I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]!]
$color[Yellow]
]`
}]