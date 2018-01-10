# svgparser
Generate inline SVGs on the fly.  Use simple syntax to write your code, and generate a <use> link for your SVGs.

It makes this
```
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" xmlns="http://www.w3.org/2000/svg">
  <defs>
  </defs>
</svg>
<svg class="svg" data-icon="__chevron">
```

Into this
```
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol id="svg__chevron" viewBox="0 0 32 32">
      <path d="M21.291 9.572l-2.206-2.15-8.375 8.688 8.387 8.469 2.188-2.175-6.25-6.313z"></path>
    </symbol>
  </defs>
</svg>
<svg viewBox="0 0 32 32">
  <use xlink:href="#svg__chevron"></use>
</svg>
```

Next up! Generate the svg object on the fly from an XML file.
