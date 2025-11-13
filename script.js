// Fungsi untuk tombol "Read More" di bagian Tentang Kami
function bacaSelengkapnya() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = event.target;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerText = "Read More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerText = "Tutup";
    more.style.display = "inline";
  }
}
