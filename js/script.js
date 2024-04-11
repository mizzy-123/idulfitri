let card = document.querySelector(".card-a");
let textElement = document.querySelector(".text");
let mainElement = document.querySelector(".main");

card.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("clicked");
  e.stopPropagation();
});

// Buat objek Typed
// var typed = new Typed(textElement, {
//   strings: ["Ciee........", "Sudah lebaran Iedul Fitri 1445 H nih..", "Pada dapat THR berapa? :V", "Mohon maaf kalau mimin ada salah..."],
//   typeSpeed: 100,
//   backSpeed: 10,
//   backDelay: 1000,
//   loop: false,
//   onComplete: function (self) {
//     // Setelah animasi selesai, sembunyikan elemen
//     setTimeout(function () {
//       // kode yang ingin dijalankan setelah jeda waktu
//       textElement.style.display = "none";
//       mainElement.classList.toggle("show");
//     }, 1000);
//   },
// });

// window.addEventListener("click", function (e) {
//   let start = document.querySelector(".start");
//   start.style.display = "none";
//   textElement.style.display = "inline";
//   var audio = document.getElementById("myAudio");
//   audio.currentTime = 36;
//   audio.play();
// });

function onClickHandler() {
  let start = document.querySelector(".start");
  start.style.display = "none";
  textElement.style.display = "inline";
  var audio = document.getElementById("myAudio");
  audio.currentTime = 36;
  audio.play();

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

  // Hapus event listener setelah di-klik sekali
  window.removeEventListener("click", onClickHandler);
}

// Tambahkan event listener untuk klik pada window
window.addEventListener("click", onClickHandler);
