// Smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

//Warna Page
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".page");
    let navbar = document.querySelector(".navbar");

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navbar.style.backgroundColor = section.getAttribute("data-color");
            document.body.style.backgroundColor = section.getAttribute("data-color");
        }
    });
});

// Hover-navbar-scrollbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    function changeActiveNav() {
        let index = sections.length;

        while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeActiveNav(); 
    window.addEventListener("scroll", changeActiveNav);
});

// Animasi progress bar
function animateProgress() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(progress => {
        const percentage = progress.getAttribute('data-percentage');
        progress.style.width = percentage + '%';
    });
}




document.addEventListener('DOMContentLoaded', () => {
    function animateProgress() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(progressBar => {
            const percentageValue = progressBar.getAttribute('data-percentage');
            const progress = progressBar.querySelector('.progress');
            const percentageText = progressBar.querySelector('.percentage');

            // Animasi lebar progress bar
            progress.style.width = percentageValue + '%';

            // Animasi persentase teks
            let currentPercentage = 0;
            const interval = setInterval(() => {
                if (currentPercentage >= percentageValue) {
                    clearInterval(interval); // Hentikan animasi jika sudah mencapai target
                } else {
                    currentPercentage++;
                    percentageText.textContent = currentPercentage + '%';
                }
            }, 15); // Kecepatan animasi teks
        });
    }

    // Panggil fungsi animasi saat halaman dimuat
    animateProgress();
});


const text = "I am Full Stack";
const typingElement = document.querySelector(".typing-text");

let charIndex = 0; // Indeks karakter saat ini
let isDeleting = false; // Status apakah sedang menghapus



// Fungsi untuk animasi typing
function typeWriter() {
  // Jika sedang mengetik
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, charIndex); // Tampilkan karakter sampai charIndex
    charIndex++; // Tambah indeks karakter

    // Jika sudah selesai mengetik, mulai menghapus
    if (charIndex > text.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Jeda sebelum mulai menghapus
      return;
    }
  } 
  // Jika sedang menghapus
  else {
    typingElement.textContent = text.substring(0, charIndex); // Hapus karakter dari belakang
    charIndex--;

    // Jika sudah selesai menghapus, mulai mengetik lagi
    if (charIndex === 0) {
      isDeleting = false;
    }
  }

  // Waktu antara setiap karakter (kecepatan typing)
  const typingSpeed = isDeleting ? 50 : 100; // Lebih cepat saat menghapus
  setTimeout(typeWriter, typingSpeed);
}

// Mulai animasi typing
typeWriter();
