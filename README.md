# Low cognitive load widget

Shared CSS and JavaScript for inline HTML widgets: section layout, item formats, bars, short transitions and a hover glossary. Widgets load these files so the same code is not rewritten in every widget.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StellaLunaSousa/low-cognitive-load-widget@1.0.1/lcl.css">
<div class="lcl-root">
  <p class="lcl-p">Text with a <span class="lcl-g" data-t="term">technical term</span>.</p>
</div>
<script src="https://cdn.jsdelivr.net/gh/StellaLunaSousa/low-cognitive-load-widget@1.0.1/lcl.js"></script>
<script>LCL({term:'Definition of the term.'})</script>
```

Colors come from the host page through CSS variables such as `--text-primary`, `--surface-1` and `--border`.

## Versions

Use an exact version in the URL. A change to these files needs a new tag, because jsDelivr caches exact versions permanently.
