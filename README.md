# Low Cognitive Load

Claude Code plugin with a response style and visual widgets that take little effort to read: the answer first, short chunks, literal language, and a hover glossary for technical terms. The labels and examples in the style are in Brazilian Portuguese.

## Install

Claude Code 2.1.275 or later installs the plugin with one command, typed inside Claude Code:

```
/plugin install low-cognitive-load --marketplace StellaLunaSousa/low-cognitive-load-widget
```

Then choose **Low Cognitive Load** as the output style. On a machine without a GitHub SSH key, set the environment variable `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` first.

## Updates

Automatic updates are off by default. To turn them on, open `/plugin`, go to **Marketplaces**, select this marketplace and choose **Enable auto-update**. To update by hand, run this command in a terminal:

```bash
claude plugin update low-cognitive-load@low-cognitive-load-marketplace
```

## Widget files

Widgets load `lcl.css` and `lcl.js` from jsDelivr, so the same code is not rewritten in every widget. The usage is in `skills/widget/SKILL.md`. Colors come from the host page through CSS variables such as `--text-primary`, `--surface-1` and `--border`.

To change these files, publish a new version tag and update the URLs in `skills/widget/SKILL.md`, because jsDelivr caches exact versions permanently.
