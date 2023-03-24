import semua_tulisan from "../../../fungsi/semua-tulisan";

export function load({ params }) {
  let tulisan_array = Object.entries(semua_tulisan);
  let tulisannya = tulisan_array.filter((x) =>
    x[0].endsWith(`${params.postingan}.mdx`)
  )[0];

  return {
    // semua: tulisan_array,
    cocok: tulisannya,
  };
}
