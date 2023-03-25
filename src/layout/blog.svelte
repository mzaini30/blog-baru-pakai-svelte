<script>
  import Base from "./base.svelte";
  import Header from "../bagian/header.svelte";
  import Sidebar from "../bagian/sidebar.svelte";
  import KumpulanList from "../bagian/kumpulan-list.svelte";
  import Footer from "../bagian/footer.svelte";
  import Komentar from "../bagian/komentar.svelte";

  export let judul;
</script>

<Base>
  <Header />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 w-270 mx-auto">
      <div class="col-span-3 prose max-w-full">
        <h1>{judul}</h1>
        <slot />
        <Komentar slug="/" />
      </div>
      <div class="col-span-1 grid grid-cols-1 gap-3">
        <Sidebar />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-10 mt-10 w-270 mx-auto">
      <KumpulanList kategori="psikologi" />
      <KumpulanList kategori="dakwah" />
      <KumpulanList kategori="renungan" />
    </div>
  </div>
  <Footer />
</Base>
