//Navbar Fixed
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	const toTop = document.querySelector("#to-top");

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
		toTop.classList.remove("hidden");
		toTop.classList.add("flex");
	} else {
		header.classList.remove("navbar-fixed");
		toTop.classList.remove("flex");
		toTop.classList.add("hidden");
	}
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

// klik luar hamburger
window.addEventListener("click", function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove("hamburger-active");
		navMenu.classList.add("hidden");
	}
});

// Form refresh&Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form dari submit default

  fetch(this.action, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      })
  })
  .then(response => {
      if (response.ok) {
          Swal.fire({
              icon: 'success',
              title: 'Sukses',
              text: 'Pesan berhasil dikirim',
              timer: 2000,
              timerProgressBar: true
          });
          this.reset();
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Kesalahan',
              text: 'Terjadi kesalahan saat mengirim pesan',
          });
      }
  })
  .catch(error => {
      Swal.fire({
          icon: 'error',
          title: 'Kesalahan',
          text: 'Terjadi kesalahan: ' + error.message,
      });
  });
});