---
name: widget
description: HTML structure for Low Cognitive Load visual widgets, with section layout, item formats, bars and a hover glossary. Load before the first widget in a session.
---

# Low Cognitive Load widget structure

Copy this structure into the widget and omit the parts the reply does not need. The `<link>` and the first `<script>` load the CSS and JavaScript, so never paste that code into a widget.

```html
<h2 class="sr-only">One-sentence summary of the widget for screen readers.</h2>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StellaLunaSousa/low-cognitive-load-widget@1.0.2/lcl.css">
<div class="lcl-root">
<p class="lcl-t">Title that names the task</p>
<p class="lcl-p">One complete sentence that says what the task is and why it is being done, with a <span class="lcl-g" data-t="term">technical term</span>.</p>
<p class="lcl-s">Count or status, such as 2 of 3 steps done</p>
<div class="lcl-b" aria-hidden="true"><span style="--c:#1D9E75"></span><span style="--c:color-mix(in srgb,#BA7517 35%,transparent)"></span></div>
<div class="lcl-n"><i class="ti ti-alert-triangle" aria-hidden="true"></i><div><b>Notice label</b><span>Notice text in a complete sentence.</span></div></div>
<details class="lcl-d" style="--c:#7F77DD"><summary><span class="lcl-i"><i class="ti ti-brain" aria-hidden="true"></i></span><span class="lcl-st">Section title with a <span class="lcl-g" data-t="term">technical term</span></span><span class="lcl-m">1 item</span><i class="ti ti-chevron-down lcl-c" aria-hidden="true"></i></summary><dl class="lcl-r">
<dt>Title above, the default</dt><dd>Complete sentence that explains this item, with the same <span class="lcl-g" data-t="term">technical term</span>.</dd>
</dl></details>
<details class="lcl-d" style="--c:#378ADD"><summary><span class="lcl-i"><i class="ti ti-notes" aria-hidden="true"></i></span>Section with short notes<span class="lcl-m">1 item</span><i class="ti ti-chevron-down lcl-c" aria-hidden="true"></i></summary><div class="lcl-l">
<p><b>Title in the sentence:</b> a short note read as running text.</p>
</div></details>
<details class="lcl-d" style="--c:#1D9E75"><summary><span class="lcl-i"><i class="ti ti-list-details" aria-hidden="true"></i></span>Section with short values<span class="lcl-m">1 item</span><i class="ti ti-chevron-down lcl-c" aria-hidden="true"></i></summary><dl class="lcl-k">
<dt>Title beside</dt><dd>Short value</dd>
</dl></details>
<details class="lcl-d" style="--c:#D85A30"><summary><span class="lcl-i"><i class="ti ti-chart-bar" aria-hidden="true"></i></span>Section with bars<span class="lcl-m">1 bar</span><i class="ti ti-chevron-down lcl-c" aria-hidden="true"></i></summary><div class="lcl-q">
<span>Bar label</span><div><i style="width:60%"></i></div><em>Value</em>
</div></details>
</div>
<script src="https://cdn.jsdelivr.net/gh/StellaLunaSousa/low-cognitive-load-widget@1.0.2/lcl.js"></script>
<script>LCL({term:'Definition of the term in 1 or 2 complete sentences.'})</script>
```
