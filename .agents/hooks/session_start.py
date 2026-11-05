#!/usr/bin/env python3
import json

print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": (
            "Project guardrails: do not touch .claude/, keep changes narrowly scoped, "
            "use Tailwind v4 for styling, preserve Astro/MDX content collections, Russian copy, "
            "routes, SEO, sitemap, robots, and IndexNow behavior, and avoid full builds by default."
        ),
    }
}))
