const semua_tulisan = import.meta.glob("../postingan/*.mdx", {
  eager: true,
});

export default semua_tulisan;
