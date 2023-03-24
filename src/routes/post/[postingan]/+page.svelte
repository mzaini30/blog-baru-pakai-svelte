<script>
  import Header from "../../../bagian/header.svelte";
  import Footer from "../../../bagian/footer.svelte";
  import Cetak from "../../../fungsi/cetak.svelte";
  import Sidebar from "../../../bagian/sidebar.svelte";

  export let data;
</script>

<Header />
<div class="py-7">
  <div class="grid grid-cols-4 gap-7 w-270 mx-auto">
    <div class="col-span-3">
      <h1>{data.cocok[1].metadata.judul}</h1>
      <div class="prose max-w-full">
        {@html data.cocok[1].default}
      </div>
    </div>
    <div class="col-span-1 grid grid-cols-1 gap-3">
      <Sidebar />
    </div>
  </div>
</div>
<Footer />
