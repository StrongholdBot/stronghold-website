---
layout: default
title: Features
permalink: /features/
---

# Features

This page is an overview the main features of the bot and how they work.

## Ranks

Ranks are associated with a role and have point requirements.
They can also be configured to stack (to not be removed if a user has a higher rank).

- View a user's ranking details using {% include ds-cmd.html cmd="ranking view" %}
- Add ranks with {% include ds-cmd.html cmd="ranking ranks add" %}, or multiple at once with {% include ds-cmd.html cmd="ranking ranks add_bulk" %}
- Remove ranks using {% include ds-cmd.html cmd="ranking ranks remove" %}
- Edit existing ranks with {% include ds-cmd.html cmd="ranking ranks edit" %}
- Check which users are in a rank using {% include ds-cmd.html cmd="ranking ranks in" %}
- List all exiting ranks using {% include ds-cmd.html cmd="ranking ranks list" %}

## Points

Points determine a user's rank. Yes, they can be negative.

- Points can be added to and removed from Discord users using {% include ds-cmd.html cmd="ranking points add" %} and {% include ds-cmd.html cmd="ranking points remove" %}
- Points can also be directly set with {% include ds-cmd.html cmd="ranking points set" %}
- View a Discord user's points using {% include ds-cmd.html cmd="ranking view" %}
- View the point leaderboard using {% include ds-cmd.html cmd="ranking points lb" %}

## Role Prefixes

Automatically assign a prefix to users' nicknames, based on their highest role that has a prefix.

- Add a role prefix using {% include ds-cmd.html cmd="ranking prefix add" %}
- Remove a role prefix with {% include ds-cmd.html cmd="ranking prefix remove" %}
- List all role prefixes by running {% include ds-cmd.html cmd="ranking prefix list" %}

## Diplomacy

Allowed members of a server can send messages to and manage relations with other servers.
Includes efficient two-way requests and convenient cross-server messaging.

Set up diplomacy using {% include ds-cmd.html cmd="dpm setup" %}.
Be warned, this exposes some public information about your server to everyone else, including the owner, server ID, and other data.

### Messages

- Send a diplomatic message using {% include ds-cmd.html cmd="dpm send" %}
- Alternatively, reply to one of Stronghold's messages in a diplomacy thread to directly send a message (reply mention must be enabled)

### Allies

- Add an ally by running {% include ds-cmd.html cmd="dpm allies add" %}
- Remove an ally with {% include ds-cmd.html cmd="dpm allies remove" %}
- List all allies using {% include ds-cmd.html cmd="dpm allies list" %}

### Enemies

- Add an enemy by using {% include ds-cmd.html cmd="dpm enemies add" %}
- Remove an enemy using {% include ds-cmd.html cmd="dpm enemies remove" %}
- List all enemies with {% include ds-cmd.html cmd="dpm enemies list" %}

### Neutral Servers

- Add a neutral server by running {% include ds-cmd.html cmd="dpm neutrals add" %}
- Remove a neutral server using {% include ds-cmd.html cmd="dpm neutrals remove" %}
- List all neutrals server using {% include ds-cmd.html cmd="dpm neutrals list" %}

## Sessions (Deployments/Events)

Permitted users can start and manage sessions, a generic form of an event that anyone can attend.
Includes real-time participant logging, management, a time quota system, and default options.

View the status of sessions with {% include ds-cmd.html cmd="session status" %}

### Management

Manage the status and participants of a session.

- Start a session by running {% include ds-cmd.html cmd="session start" %}
- Stop a session using {% include ds-cmd.html cmd="session stop" %}
- Edit an ongoing session with {% include ds-cmd.html cmd="session edit" %}
- Remove or kick a participant using {% include ds-cmd.html cmd="session remove" %} and {% include ds-cmd.html cmd="session kick" %} respectively (see the difference in their usage sections)

### Time Quotas

Filter participants by time spent and check who has met the quota.

- Set a time quota using {% include ds-cmd.html cmd="session quota" %}
- View the time a user has spent in a session with {% include ds-cmd.html cmd="session time" %}

### Default Options

Quickly start sessions with commonly used options.

- Set defaults for sessions using {% include ds-cmd.html cmd="session edit_default" %}
- Start a session with the defaults after running {% include ds-cmd.html cmd="session quickstart" %}

### Automatic Points

Give points to session attendees automatically. Meeting the time quota can be required for receiving points.

- Set a number to provide or disable automatically giving points to participants after a session is stopped with {% include ds-cmd.html cmd="session auto_points" %}

## Custom Commands (Aliases/Proxies)

Create custom commands that redirect to other commands (only Stronghold's commands). This is useful for styling and shortening frequently used commands.

- Add a custom command name by using {% include ds-cmd.html cmd="proxy add" %}
- Remove a custom command with {% include ds-cmd.html cmd="proxy remove" %}
- List all custom commands using {% include ds-cmd.html cmd="proxy list" %}
- Clear all custom commands by running {% include ds-cmd.html cmd="proxy clear" %}

## Roblox Integration

Includes the ability to add and remove Roblox users from the blacklist, identified by their user ID.
This prevents blacklist bypassing by changing your username.
You can also assign points to Roblox users.

### Blacklist

List and manage the Roblox user blacklist.
Doesn't affect anything outside Roblox integration.

- Add a user to the blacklist by using {% include ds-cmd.html cmd="rbx blacklist add" %}
- Remove a user from the blacklist by running {% include ds-cmd.html cmd="rbx blacklist remove" %}
- List all blacklisted users with {% include ds-cmd.html cmd="rbx blacklist list" %}
- Clear the blacklist using {% include ds-cmd.html cmd="rbx blacklist clear" %}
- Check if a user is blacklisted with {% include ds-cmd.html cmd="rbx blacklist check" %}

### Points

Attempting to add points to a blacklisted user leads to the command failing.
Roblox user points do not count towards any ranks (there is no rank system for Roblox points).

- View the points of a Roblox user by running {% include ds-cmd.html cmd="rbx points get" %}
- Assign points to a Roblox user by using {% include ds-cmd.html cmd="rbx points set" %}
- Add points to a Roblox user using {% include ds-cmd.html cmd="rbx points add" %}
- Remove points from a Roblox user by using {% include ds-cmd.html cmd="rbx points remove" %}
- List all Roblox users with points with {% include ds-cmd.html cmd="rbx points list" %}

## Role Groups

Create groups of roles to easily assign and remove multiple roles at once. Useful for managing event roles or even ranks.
You can allow regular users to join or request role groups themselves to reduce the workload of staff members.

- Create a role group using {% include ds-cmd.html cmd="ranking groups create" %}
- Delete a role group with {% include ds-cmd.html cmd="ranking groups delete" %}
- Add roles from a group to a user by running {% include ds-cmd.html cmd="ranking groups add" %}
- Remove roles from a user using {% include ds-cmd.html cmd="ranking groups remove" %}
- List all role groups with {% include ds-cmd.html cmd="ranking groups list" %}
- View the roles in a group by using {% include ds-cmd.html cmd="ranking groups view" %}
- Get the groups a user is in with {% include ds-cmd.html cmd="ranking groups user" %}

## Convenience Commands

A set of community-requested commands which combine multiple commands into one, for ease of use.
Currently, there is only one. If you have any ideas, feel free to [contact us](https://discord.gg/stronghold)!

- Add points to a Roblox user once per session with {% include ds-cmd.html cmd="c bp" %}, while considering blacklists.

## Activity Checks

Create customisable modular activity checks. Automatically send a message to a channel on a custom interval. For information regarding formatting and event sequencing, run {% include ds-cmd.html cmd="activity checks info" %}.

- Start an activity check using {% include ds-cmd.html cmd="activity checks create" %}
- Cancel an activity check by using {% include ds-cmd.html cmd="activity checks cancel" %}. Use this to change options
- Pause and resume activity checks using {% include ds-cmd.html cmd="activity checks pause" %} and {% include ds-cmd.html cmd="activity checks resume" %} respectively.
- Run an activity check, regardless of the interval, with {% include ds-cmd.html cmd="activity checks execute" %}.

## Permission Management

Manage internal permissions to fine-tune who can do what with the bot.

- Get the calculated permissions of a user using {% include ds-cmd.html cmd="permissions get" %}, which combines the permissions specific to the user and their roles.
- List available permissions using {% include ds-cmd.html cmd="permissions list" %}

### Roles

Manage permissions specific to roles.

- Add permissions with {% include ds-cmd.html cmd="permissions roles add" %}
- Remove permissions using {% include ds-cmd.html cmd="permissions roles remove" %}
- List permissions by running {% include ds-cmd.html cmd="permissions roles list" %}
- Set permissions directly (remove any previous perms) with {% include ds-cmd.html cmd="permissions roles set" %}
- Clear all permissions using {% include ds-cmd.html cmd="permissions roles clear" %}

### Users

Manage permissions that apply to individual users.

- Add permissions with {% include ds-cmd.html cmd="permissions users add" %}
- Remove permissions using {% include ds-cmd.html cmd="permissions users remove" %}
- List permissions by running {% include ds-cmd.html cmd="permissions users list" %}
- Set permissions directly (remove any previous perms) with {% include ds-cmd.html cmd="permissions users set" %}
- Clear all permissions by using {% include ds-cmd.html cmd="permissions users clear" %}

## Settings

Configure various settings to customise the bot's behavior and appearance in your server.

Set the bot's profile picture in your server using {% include ds-cmd.html cmd="set bot_pfp" %}.

## Logging

Keep track of what happens using the bot, including errors, warnings, information, and change tracking.
After running {% include ds-cmd.html cmd="setup" %}, you can configure logging. More information can be found in the [Getting Started guide](/getting-started/).

## Miscellaneous

Some miscellaneous commands for utility purposes.

### Setup

Run {% include ds-cmd.html cmd="setup" %} to configure the bot.

### Help

Use {% include ds-cmd.html cmd="help" %} to see all available commands or view the help entry for a specific command.

### Feedback

Run {% include ds-cmd.html cmd="feedback" %} to send feedback to the bot developers.

### Invite

Run {% include ds-cmd.html cmd="invite" %} to get a link to invite the bot to your server.

### Ping

Use {% include ds-cmd.html cmd="ping" %} to see if the bot is online and calculate latency.
