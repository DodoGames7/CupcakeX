module.exports = {
name: "dice",
type: "messageCreate",
code: `$let[messageID;$sendMessage[$channelID;Rolling.....;true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title[Results...]
$description[You got a $randomNumber[1;6]! 🎲]
$color[Red]
]
`
}