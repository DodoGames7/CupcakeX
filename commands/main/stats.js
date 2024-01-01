module.exports = {
    name: "stats",
    type: "messageCreate",
    code: `$title[Statistics]
$description[
* 🌏 **Servers**: **$guildCount**
* 🤖 **$getVar[name;$botID]**: **1.0.0-beta**
* 🛠️ **Build Number**: **$getVar[buildNumber;$botID]**
* 👾 **ForgeScript**: **$version**
* **Ram**: **$round[$ram]MB**
* **Cpu**: **$cpu**
* 🖥️ **Operating system**: **$os**
]
 `
}
