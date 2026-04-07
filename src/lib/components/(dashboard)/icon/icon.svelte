<script lang="ts" module>
  import type { SVGAttributes } from 'svelte/elements';
  export type DashboardIconName =
    | 'layout-box'
    | 'wallet'
    | 'chart-square'
    | 'settings'
    | 'transaction-list'
    | 'notification';

  export interface Props extends SVGAttributes<SVGSVGElement> {
    icon: DashboardIconName;
  }
</script>

<script lang="ts">
  let { icon, ...rest }: Props = $props();
</script>

<svg {...rest}>
  <use xlink:href="#svg--dashboard-{icon}" />
</svg>
