---
id: enchantment-example
title: Enchantment Documentation
---

## Enchantment Name

<details>
<summary>Level</summary>

<select id="level">
  <option value="1">Level 1</option>
  <option value="2">Level 2</option>
  <option value="3">Level 3</option>
</select>

</details>

### Description

<div id="output"></div>

<script src="calculate.js"></script>
<script>
document.getElementById("level").addEventListener("change", function() {
    var level = parseInt(this.value);
    var chance = 0.05; // Adjust this value as needed
    var damage = 10; // Adjust this value as needed
    document.getElementById("output").innerHTML = calculateDamage(level, chance, damage);
});
</script>