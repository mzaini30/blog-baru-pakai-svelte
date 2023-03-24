<script>
  import Base from "../layout/base.svelte";
  import KumpulanList from "../bagian/kumpulan-list.svelte";
  import Header from "../bagian/header.svelte";
  import Hero from "../bagian/hero.svelte";
  import IsiBeranda from "../bagian/isi-beranda.svelte";
  import KumpulanCard from "../bagian/kumpulan-card.svelte";
  import Sidebar from "../bagian/sidebar.svelte";
  import Footer from "../bagian/footer.svelte";
</script>

<Base>
  <Header />
  <Hero />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 w-270 mx-auto">
      <div class="col-span-3">
        <IsiBeranda />
      </div>
      <div class="col-span-1 grid grid-cols-1 gap-3">
        <Sidebar />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-10 mt-10 w-270 mx-auto">
      <KumpulanCard kategori="crypto" />
      <KumpulanCard kategori="keuangan" />
    </div>
    <div class="grid grid-cols-3 gap-10 mt-10 w-270 mx-auto">
      <KumpulanList kategori="psikologi" />
      <KumpulanList kategori="dakwah" />
      <KumpulanList kategori="renungan" />
    </div>
  </div>
  <Footer />
</Base>
