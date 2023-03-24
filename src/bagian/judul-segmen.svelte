<script>
  export let link_selengkapnya;
  export let teks;
</script>

<div class="flex justify-between">
  <div>{teks}</div>
  {#if link_selengkapnya}
    <div><a href={link_selengkapnya}>selengkapnya</a></div>
  {/if}
</div>
