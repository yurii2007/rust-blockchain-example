<script lang="ts" module>
  export type DashboardIconName = 'layout-box' | 'wallet';

  export interface Props {
    icon: DashboardIconName;
  }
</script>

<script lang="ts">
  let { icon }: Props = $props();
</script>

<svg>
  <use xlink:href="#svg--dashboard-{icon}" />
</svg>
