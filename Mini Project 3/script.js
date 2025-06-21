/* Sistem Randomizer */
function prosesRandom(panjang) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const chars = "!@#$%&-_+=().,";

  let karakter = "";
  let password = "";

  karakter += upperCase;
  karakter += lowerCase;
  karakter += numbers;
  karakter += chars;

  for (i = 0; i < panjang; i++) {
    const sistemRandom = Math.floor(Math.random() * karakter.length);
    password += karakter[sistemRandom];
  }

  return password;
}

function klikRandomizer() {
  const password = document.getElementById("password");
  const maksKarakter = 13;
  const minKarakter = 8;
  const jumlahKarakter =
    Math.floor(Math.random() * (maksKarakter - minKarakter)) + minKarakter;

  const hasilPassword = prosesRandom(jumlahKarakter);

  password.value = hasilPassword;
}

/* Sistem Pendaftaran */

function prosesPenamaan(nama) {
  return nama
    .toLowerCase()
    .split(" ")
    .filter((kata) => kata.length > 0)
    .join("");
}

function buatAkun() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const outputteks = document.getElementById("outputteks");
  const glassEdgeColor = document.querySelector(".glass");
  const confetti = new JSConfetti();

  const panjangPassword = password.length;
  const kosong = "";
  const namaRapih = prosesPenamaan(username);

  if (namaRapih != kosong && panjangPassword > 0 && !(panjangPassword < 8)) {
    confetti.addConfetti();
    outputteks.textContent = "Yahuuu!!!";
    outputteks.style.color = "#6fff5c";
    glassEdgeColor.style.border = "2px solid #6fff5c";
    setTimeout(() => {
      window.alert(
        `Akun berhasil dibuat!\nusername: ${namaRapih}\npassword: ${password}`
      );
    }, 3000);
  } else if (
    namaRapih != kosong &&
    panjangPassword > 0 &&
    panjangPassword < 8
  ) {
    outputteks.textContent = "Karakter password kurang dari 8";
    glassEdgeColor.style.border = "2px solid #f30101";
  } else {
    outputteks.textContent = "Data kredensial tidak boleh ada yang kosong";
    glassEdgeColor.style.border = "2px solid #f30101";
  }
}

/* Sistem show and hide password*/
let ganti = localStorage.getItem("ganti");
const switchMata = document.getElementById("switch-mata");
const pemanggilganti = document.getElementById("pemanggilganti");

function mataTutup() {
  pemanggilganti.classList.add("ganti");
  localStorage.setItem("ganti", "aktif");
}

function mataBuka() {
  pemanggilganti.classList.remove("ganti");
  localStorage.setItem("ganti", null);
}

switchMata.addEventListener("click", () => {
  const password = document.getElementById("password");
  ganti = localStorage.getItem("ganti");
  if (ganti !== "aktif") {
    password.type = "text";
    mataTutup();
  } else {
    password.type = "password";
    mataBuka();
  }
});
