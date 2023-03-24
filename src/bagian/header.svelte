<script>
  import Cetak from "../fungsi/cetak.svelte";
  import semua_tulisan from "../fungsi/semua-tulisan";

  const semua_postingan = semua_tulisan;
  // const semua_postingan = import.meta.glob("../postingan/*.mdx", {
  //   eager: true,
  // });
  let semua_kategori = [];
  for (let x of Object.entries(semua_postingan)) {
    semua_kategori = [...semua_kategori, x[1].metadata.kategori];
  }
  semua_kategori = [...new Set(semua_kategori)].sort();
</script>

<div
  class="bg-red-500 w-full z-999 text-white p-3 sticky top-0 hover:[&_a]:text-black"
>
  <div class="mx-auto w-270 flex justify-between">
    <a href="/">Zen Zen</a>
    <div class="flex gap-3">
      {#each semua_kategori as kategori}
        <a href="/kategori/{kategori}">{kategori}</a>
      {/each}
    </div>
  </div>
</div>
