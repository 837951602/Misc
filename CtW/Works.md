# PS. Testing. Quite incomplete.

<table>
<tr><th>Work</th><th>Requirement</th><th>Description</th><th>Author</th></tr>
<tr><td>g.general mobdrop, item duplicate</td><td>Rp Rs Bb/u</td><td>Die while reaching end portal duplicates the mob.<br>Usually lava can do this, but sometimes we need other damage</td><td>?</td></tr>
<tr><td>g.general block duplicate</td><td>Jc Pk</td><td>Large number of block updates(rail, sign, etc.) stop item from being consumed by player and NBT from being stored<br>Used to create skeleton skull before 1.13</td><td>Panda4994</td></tr>
<tr><td>g.general duplicate; chunk saving preventer</td><td>Custom</td><td>Large number(>1MB) of info in a chunk fail to save. Book can easily contain such an amount of data</td><td>Ctw, etc.<sup>[1]</sup></td></tr>
<tr><td>g.hostile mob drop</td><td>Pn Pf</td><td>Monsters spawn in a distance range and may move onto open trapdoor, falling down and being flushed for falling damage</td><td>-</td></tr>
<tr><td>obtain info from outside of game without console</td><td>Mf V(1.9-)</td><td>Corner structure block reloads the structure when powered</td><td>chyx</td></tr>
</table>

<h3>Work Reference:</h3>

* g: Resource generator

<h3>Requirement Reference:</h3>

* Bb: Need to break blocks that usually unbreakable
* Bc: Need sand color changer(before 1.13)
* Bd: Need special item duplicating
* Jc: Require Java crash or force quit
* Js: Require Java Stack unintended behavior
* Mc: Need to be built in creative mode
* Mi: Need to be built in creative mode with inventory editor
* Mo: Need to be operator or with cheat on
* Mm: Need command block
* Mf: Need file access
* Pc: Require a non-AFK player(including active macro)
* Pt: Require sometimes a non-AFK player
* Pk: Require a player holding keys(can't chat, can't craft, etc.)
* Pp: Require a player at the exact place
* Pn: Require a player nearby
* Pf: Require player not nearby(or maybe can't be loaded)
* Rb: Require special biome
* Rc: Require special structure
* Rp: Require end portal usage
* Rs: Require world spawn usage
* Sx: Need more item than a world provide
* Su: Need unrenewable item
* V: Should be in the version range
* /u: usually so

<h3>Author Reference:</h3>

* ?: Not sure who made it
* -: Was created from the early period when Minecraft was not popular or by lots of people as soon as the based feature appear
* [1]: Lots of users claim that they have found the solution but hide for security reason, so there may be lots of author
