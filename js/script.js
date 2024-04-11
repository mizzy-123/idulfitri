let card = document.querySelector(".card-a");
let textElement = document.querySelector(".text");
let mainElement = document.querySelector(".main");

card.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("clicked");
});

// Buat objek Typed
var typed = new Typed(textElement, {
  strings: ["Ciee........", "Sudah lebaran Iedul Fitri 1445 H nih..", "Pada dapat THR berapa? :V", "Mohon maaf kalau mimin ada salah..."],
  typeSpeed: 100,
  backSpeed: 10,
  backDelay: 1000,
  loop: false,
  onComplete: function (self) {
    // Setelah animasi selesai, sembunyikan elemen
    setTimeout(function () {
      // kode yang ingin dijalankan setelah jeda waktu
      textElement.style.display = "none";
      mainElement.classList.toggle("show");
    }, 1000);
  },
});
