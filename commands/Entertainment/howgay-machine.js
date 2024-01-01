module.exports = {
name: "howgay",
type: "messageCreate",
code: `
$let[user;$replace[$replace[$checkCondition[$findUser[$message;true]==$authorID];true;You're];false;$username[$findUser[$message;true]] is]]
$title[How Gay machine]
$description[$get[user] $randomNumber[0;100]% gay ]
$color[LuminousVividPink]`
}