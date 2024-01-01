module.exports = {
name: "say",
type: "messageCreate",
code: `$disableEveryoneMention
$onlyIf[$message!=;Please say whatever you want.]
$message

 From \`$username\`
`
}