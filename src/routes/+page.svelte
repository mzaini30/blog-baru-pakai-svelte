<script>
  import Base from "../layout/base.svelte";
  import Header from "../bagian/header.svelte";
  import Hero from "../bagian/hero.svelte";
  import Sidebar from "../bagian/sidebar.svelte";
  import IsiBeranda from "../bagian/isi-beranda.svelte";
</script>

<Base>
  <Header />
  <Hero />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 w-250 mx-auto">
      <div class="col-span-3">
        <IsiBeranda />
      </div>
      <div class="col-span-1 grid grid-cols-1 gap-3">
        <Sidebar />
      </div>
    </div>
  </div>
</Base>
