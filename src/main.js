// src/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Contoh sederhana: Mengubah opacity gambar profil setelah DOM dimuat
    const profileImage = document.querySelector('.animate-fade-in-up img');
    if (profileImage) {
        profileImage.onload = () => {
            profileImage.style.opacity = '1';
        };
        // Jika gambar sudah di-cache, pastikan untuk memicu onload atau set langsung
        if (profileImage.complete) {
            profileImage.style.opacity = '1';
        }
    }

    // Contoh: Smooth scroll untuk link navigasi (jika ada)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contoh validasi formulir sederhana (di sisi klien)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Harap lengkapi semua kolom formulir.');
                e.preventDefault(); // Mencegah pengiriman formulir
            }
            // Anda bisa menambahkan validasi email, panjang pesan, dll.
        });
    }
});