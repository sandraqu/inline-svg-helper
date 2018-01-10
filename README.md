# svgparser
Generate inline SVGs on the fly.  Use simple syntax to write your code, and generate a <use> link for your SVGs, and use simple data attributes to declare and place an optional label.  By default, the label will be aligned to the left.

It makes this
```
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" xmlns="http://www.w3.org/2000/svg">
  <defs>
  </defs>
</svg>
<svg class="svg" data-icon="__chevron">
<svg class="svg" data-icon="__chevron" data-label="Chevron Label" data-align="right">

```

Into this
```
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <svg style="display:none;">
      <symbol id="svg__chevron" viewBox="0 0 32 32">
        <path d="M20.978 8.947l-1.581-1.525-8.375 8.688 8.387 8.469 1.563-1.55-6.875-6.938z"></path>
      </symbol>
    </svg>
  </defs>
<svg class="svg svg__chevron" role="img" title="__chevron button">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg__chevron"></use>
</svg>
<span class="svg__label">Chevron Label</span>
<svg class="svg svg__chevron" role="img" title="__chevron button">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg__chevron"></use>
</svg>
```

Next up!
* Generate the svg object on the fly from an XML file.
* Improve generated title attribute string
