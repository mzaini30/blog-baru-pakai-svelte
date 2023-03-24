<script>
  import gambar_default from "../fungsi/gambar-default";

  export let link, gambar, judul;

  link = link.replace(".mdx", "").replace("/postingan/", "/post/");
</script>

<a href={link} class="flex gap-3">
  <img
    src={gambar || gambar_default}
    class="w-25 rounded aspect-square object-cover"
    alt="Gambar {judul}"
  />
  <div>{judul}</div>
</a>
