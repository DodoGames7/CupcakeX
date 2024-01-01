module.exports = {
    name: "version",
    type: "messageCreate",
    code: `$author[Changelog center;$userAvatar[$botID];https://www.youtube.com/watch?v=dQw4w9WgXcQ]
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
`
}
