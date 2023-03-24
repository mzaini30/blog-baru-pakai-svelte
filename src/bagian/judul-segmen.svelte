<script>
  export let link_selengkapnya;
  export let teks;
</script>

<div class="flex justify-between items-center">
  <div class="text-3xl font-bold text-red-500">{teks}</div>
  {#if link_selengkapnya}
    <div>
      <a
        class="bg-red-500 text-white px-4 py-2 rounded-3xl"
        href={link_selengkapnya}>Selengkapnya</a
      >
    </div>
  {/if}
</div>
