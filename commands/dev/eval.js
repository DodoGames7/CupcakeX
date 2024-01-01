module.exports = {
name: "eval",
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID;$authorID]==true;Looks like you're not dev of this bot.]
$onlyIf[$message!=;Please eval a code.]
$eval[$message]`
}
