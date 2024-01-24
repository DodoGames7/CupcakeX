module.exports = {
type: "ready",
code: `$onlyIf[$getVar[isDBsetup;$botID;false]==false;]
$setVar[isDBsetup;$botID;true]
$setVar[buildNumber;$botID;1052]
$setVar[name;$botID;CupcakeX]
$log[Database isn't setup. The configuration setup has been ran successfully.]
`
}