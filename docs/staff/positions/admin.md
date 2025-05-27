---
title: Admin
sidebar_position: 5
---

# Admin Position Guide

## Role Overview

As an **Admin**, you hold a leadership position within our server infrastructure. Your responsibilities extend beyond moderation—Admins are trusted with the oversight of system integrity, staff management, escalation handling, and the execution of advanced administrative functions. You serve as a pillar of both technical expertise and community standards.

Admins are expected to make decisions rooted in fairness, logic, and long-term server health. You must exhibit impeccable judgment, strong communication, and a comprehensive understanding of our plugins, systems, and server dynamics.

> This role is reserved for individuals with demonstrable intelligence, critical thinking skills, and a calm, professional demeanor.

---

## Core Administrative Duties

- **Staff Oversight:** Mentor Moderators, handle disputes between staff members, and provide final decisions on controversial punishments or appeals.
- **Technical Maintenance:** Execute and troubleshoot plugin-level commands, rollbacks, and configuration updates.
- **Player Management:** Investigate high-level infractions, manage alt detection, IP-based punishments, and oversee significant player reports.
- **Server Stability:** Monitor logs, identify systemic abuse patterns, and ensure all tools and permissions are operating as intended.

---

## Advanced Command Suite

### 🎓 Experience Manipulation

The `/exp` suite allows precise control over player experience points, including randomization and context-aware deductions.

#### Static Examples

```bash
/exp 10
/exp add 10
/exp set 10L     # Set level instead of raw exp
/exp take 10
/exp Zrips clear
/exp Zrips add 10
```

#### Dynamic Variable Usage

```bash
/exp add %rand/10-20%     # Grants 10–20 random XP
/exp take 5%[15-100][Zrips] 
```

> Takes 5% XP from target (referenced from Zrips’ XP), with a cap between 15 and 100 XP.

---

### 🔁 Rollback & Restore (CoreProtect)

Undo or restore player actions for grief prevention, event prep, or world maintenance.

#### Rollback

```bash
/co rollback u:<user> t:<time> r:<radius> a:<action> i:<include> e:<exclude>
/co rb <params>
```

#### Restore

```bash
/co restore u:<user> t:<time> r:<radius> a:<action> i:<include> e:<exclude>
/co rs <params>
```

> Use sparingly. Always confirm context before executing wide-area rollbacks.

---

### 🧭 Teleportation & Player Relocation

Admins have global teleportation authority via the Lands plugin and essential permissions.

#### Random Teleportation

```bash
/lands wild <world> <player>
```

#### Spawn Teleportation

```bash
/lands spawn <land> <area> <player> <wait>
```

##### Examples

- To teleport a player to their edit land spawn:  
  ```bash
  /lands spawn none none <player> <wait>
  ```

- To teleport to a specific land:  
  ```bash
  /lands spawn Kingdoms none <player> 0
  ```

---

### 🚫 Global Sanctions

These tools are reserved for situations involving alt abuse, evasion, or malicious coordinated attacks.

```bash
/ipban <player>
/ipmute <player>
/unban <player>
```

---

### 🧳 Player Vault Access

Admins may investigate player inventories for potential exploits, dupe items, or contraband.

```bash
/pv <player> list         # List all player vaults
/pv <player> <#>          # Open specific vault by index
```

> Log all vault investigations. Unauthorized inventory snooping will result in demotion.

---

## Professional Standards

### Expectations of Conduct

- **Decision-Making:** Always assess both context and consequence. Seek consensus among Admins for permanent punishments.
- **Data Integrity:** Do not alter or remove logs without documented rationale. Always report anomalies.
- **Neutrality:** Admins must never act in self-interest or bias. Avoid interactions with personal allies when conflict-of-interest exists.
- **Chain of Command:** Major changes (e.g., plugin reconfigs, global resets, rule alterations) must be proposed to Senior Staff or Ownership.

---

## Quick Checklist

- [x] Perform regular audits of staff behavior and command logs.
- [x] Stay up-to-date with plugin updates, changelogs, and server patches.
- [x] Maintain a professional, non-combative attitude even under stress.
- [x] Log *all* high-impact commands (rollback, ban, tp, pv, etc.).
- [x] Be available to deescalate conflict and handle appeals.

> For ambiguous situations, or if a unique precedent needs to be set, consult with the Server Owner or Senior Administrator before proceeding.

---

Admins are the backbone of our community’s infrastructure. Your vigilance, technical insight, and judgment safeguard the integrity of the server. Thank you for taking your role seriously.
