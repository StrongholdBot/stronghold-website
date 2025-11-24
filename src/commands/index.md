---
layout: default
title: Commands
---

# Commands

{% for category in site.data.commands %}
## {{ category[0] | capitalize }}

{% for cmd in category[1] %}
### /{{ cmd.name }}
**Usage:** `{{ cmd.usage }}`  
{{ cmd.description }}
{% endfor %}

{% endfor %}
