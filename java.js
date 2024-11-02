      //java halaman satu
function submitName() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        localStorage.setItem('userName', name); // Simpan nama di local storage
        window.location.href = 'halaman2.html'; // Pindah ke halaman kedua
    } else {
        alert('Silakan masukkan nama kamu!');
    }
}




     //java halaman kedua

function gamau(button) {
            const mauButton = document.getElementById("btn_mau");
            const offsetX = Math.floor(Math.random() * 100) - 50; // Gerakan horizontal
            const offsetY = Math.floor(Math.random() * 100) - 50; // Gerakan vertikal
            const newLeft = button.offsetLeft + offsetX;
            const newTop = button.offsetTop + offsetY;

            // Pastikan tombol tetap dalam jendela
            if (newLeft < 0) button.style.left = "0px";
            else if (newLeft > window.innerWidth - button.offsetWidth) button.style.left = (window.innerWidth - button.offsetWidth) + "px";
            else button.style.left = newLeft + "px";

            if (newTop < 0) button.style.top = "0px";
            else if (newTop > window.innerHeight - button.offsetHeight) button.style.top = (window.innerHeight - button.offsetHeight) + "px";
            else button.style.top = newTop + "px";
            button.style.position = 'absolute';
        }

        // Membuat gambar hati jatuh
        function createFallingHeart() {
            const heart = document.createElement('img');
            heart.src = 'hati.gif'; // Gambar hati
            heart.className = 'falling-heart';
            heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durasi jatuh acak
            document.body.appendChild(heart);

            // Menghapus gambar setelah jatuh
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        // Buat hati jatuh setiap 2 detik
        setInterval(createFallingHeart, 2000);