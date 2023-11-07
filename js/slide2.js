let slideIndex2 = 0;
showSlides2();


function showSlides2() {
  let i;
  const slides2 = document.getElementsByClassName("slide2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 2000); // Ganti gambar setiap 2 detik
}
