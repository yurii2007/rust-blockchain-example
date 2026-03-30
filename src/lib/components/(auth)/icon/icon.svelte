<script lang="ts" module>
  export type AuthIconName = 'google-color' | 'github-outlined';

  export interface Props {
    icon: AuthIconName;
  }
</script>

<script lang="ts">
  let { icon }: Props = $props();
  const spriteLink = `#svg--auth-${icon}`;
</script>

<svg>
  <use xlink:href={spriteLink} />
</svg>
