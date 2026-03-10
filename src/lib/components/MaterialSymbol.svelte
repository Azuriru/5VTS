<script lang="ts">
    import { type MaterialSymbol } from 'material-symbols';

    let { type = 'outlined', name, size = null }: {
        type?: 'outlined' | 'rounded' | 'sharp';
        name: MaterialSymbol;
        size?: number | null;
    } = $props();

    const fontWeight = type === 'outlined' ? 300 : 'initial';
</script>

<span class="material-symbol material-symbols-{type}" style:font-size={size + 'px'} style:font-weight={fontWeight}>
    {name}
</span>

<style lang="scss">
    .material-symbol {
        font-size: inherit;
    }
</style>