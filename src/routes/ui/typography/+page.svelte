<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<section class="space-y-4">
  <div>
    <span class="typography-subtitle uppercase">H1</span>
    <p class="typography-h1">Heading One</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">H2</span>
    <p class="typography-h2">Heading Two</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">H3</span>
    <p class="typography-h3">Heading Three</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">H4</span>
    <p class="typography-h4">Heading Four</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Subtitle</span>
    <p class="typography-subtitle">Subtitle text style</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Body 1</span>
    <p class="typography-body1">Body one text — medium weight, slightly larger for emphasis.</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Body 2</span>
    <p class="typography-body2">Body two text — regular weight, standard reading size.</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Caption</span>
    <p class="typography-caption">Caption text — chart labels, table headers, footnotes.</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Button</span>
    <p class="typography-button">Button text style</p>
  </div>
  <div>
    <span class="typography-subtitle uppercase">Link</span>
    <p class="typography-body2">
      Here is an <a href={resolve('/ui/typography')} class="typography-link">inline link</a> within body
      text.
    </p>
  </div>
</section>
