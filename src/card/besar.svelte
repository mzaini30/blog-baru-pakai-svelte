<script>
  import gambar_default from "../fungsi/gambar-default";
  import olah_link from "../fungsi/olah-link";

  export let link, judul, gambar;

  link = olah_link(link);
</script>

<a href={link} class="block relative top-0 pb-[56.25%]">
  <img
    src={gambar || gambar_default}
    class="w-full object-cover aspect-video rounded-lg absolute top-0"
    alt="Gambar {judul}"
  />
  <div
    class="w-full object-cover rounded-lg text-2xl p-4 aspect-video bg-green-500/70 absolute top-0 grid grid-cols-1 gap-5 content-between"
  >
    <div />
    <div class="text-white">{judul}</div>
  </div>
</a>
