# PS. Testing. Quite incomplete.

<table>
<tr><th>Work</th><th>Requirement</th><th>Description</th><th>Author</th></tr>
<tr><td>g.general item duplicate</td><td>Pn</td><td>Killing zombies/husk while they convert into drowned/zombies causes held items to be duplicated.</td><td>ilmango</td></tr>
<tr><td>g.general item duplicate</td><td>Rp Rs Bb/u</td><td>Die while reaching end portal duplicates the mob.<br>Usually lava can do this, but sometimes we need other damage</td><td>?</td></tr>
<tr><td>g.general block duplicate</td><td>Js Pk</td><td>Large number of block updates(rail, sign, etc.) stop item from being consumed by player and NBT from being stored<br>Used to create skeleton skull before 1.13</td><td>Panda4994</td></tr>
<tr><td>g.general duplicate; chunk saving preventer</td><td>Bs</td><td>Large number(>1MB) of info in a chunk fail to save. Book can easily contain such an amount of data</td><td>Ctw, etc.<sup>[1]</sup></td></tr>
<tr><td>g.normal hostile mob drop</td><td>Pn Pf</td><td>Monsters spawn in a distance range and may move onto open trapdoor, falling down and being flushed for falling damage</td><td>-</td></tr>
<tr><td>g.blaze rod</td><td>Pk</td><td>throw blaze egg and suffocate it</td><td>-</td></tr>
<tr><td>g.gold</td><td>Pp</td><td>make pigmans angry and let one infect another</td><td>-</td></tr>
<tr><td>g.slimeball</td><td>Pp</td><td>drown or anyway to slime</td><td>-</td></tr>
<tr><td>g.crops</td><td>V(1.8-)</td><td>Let farmer(villager) farm.<br>For items with different form of seeds, give the farmer 8 stacks of seeds and hopper away crops;<br>For the same one, have another hungry villager but hopper away the food given to it.<br>V(1.14-)Connect to composter to generate bone meals</td><td>-</td></tr>
<tr><td>g.pumpkin/melon/reeds/bamboo</td><td></td><td>Detectly/Timerly piston-push and hopper/piston away<br>V(1.14-)Connect some types to composter to generate bone meals</td><td>-</td></tr>
<tr><td>obtain info from outside of game without console</td><td>Mf V(1.9-)</td><td>Corner structure block reloads the structure when powered<br>Alternatively, you can "reload" with <code>datapack enable/disable %any%</code></td><td>chyx, Marcono1234, ?, -</td></tr>
<tr><td>convert long long into two ints</td><td>Mm V(1.14-)</td><td>data get with scale=2^-32 to get high and <code>modify</code> into an <code>int</code> for low</td><td>-/?</td></tr>
<tr><td>UUID Randomer</td><td>Mm V(1.13-)</td><td>data get a UUID with scale=n*2^-63 to get random ranged [-n,n)</td><td>-/?</td></tr>
<tr><td>Key for chest in different language</td><td>Mm</td><td>summon a mob with translated name and use selector `@e[name=&lt;The translation result&gt;]` to get current lang, then satisfy the chest's `Lock`</td><td>-/?</td></tr>
<tr><td>Circuit</td><td></td><td>Multi redstone wire pointing to solid block with redstone torch attached is a NOR gate. dd number of NOT gate is a clock. Get ispowered per distance with torch to know exact power level</td><td>-</td></tr>
<tr><td>Dense horizonal iron screen</td><td></td><td>Piston taking 1t input inverts this pixel and one below. Xor back to turn picture into signal.</td><td>Dico-?</td></tr>
<tr><td>Dense horizonal lamp screen</td><td></td><td>Output of piston with redstone block face can be switched to any intended with direct&through-iron alternated(assuming through-iron actived, from down to up, whether lowen through-iron and give the direct above how long input)</td><td>CtW</td></tr>
</table>

<h3>Work Reference:</h3>

* g: Resource generator

<h3>Requirement Reference:</h3>

* Bb: Need to break blocks that usually unbreakable
* Bc: Need sand color changer(before 1.13)
* Bd: Need special item duplicating
* Bs: Need saving overflow
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
* Pp: Require a player at the exact place or being moved by machines
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

# Ban List

May be outdated or missing for other authors, but not for ones by CtW

<table>
  <tr><th>Author</th><th>Banned user</th><th>Note</th></tr>
  <tr><td>CtW</td><td>The RedPixel</td><td>Reason: Copying and claiming<br>Unban by creating 3 more works<br>Don't apply if used to make <a href="Ctw名词定义.md">works</a></td></tr>
  <tr><td>CtW</td><td>mcbbs.net</td><td>Reason: 玄素引战<br>Unban by apologizing<br>Direct access can bypass this limitation</td></tr>
</table>
