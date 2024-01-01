module.exports = {
name: "rps",
type: "messageCreate",
code: `$title[RPS - The Game]
$description[The game has been started. What are you going to choose against the bot?]
$addActionRow
$addButton[rock_$authorID;Rock;Primary;🌑;false]
$addButton[paper_$authorID;Paper;Primary;📰;false]
$addButton[scissors_$authorID;Scissors;Primary;✂️;false]
`
}