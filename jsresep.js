document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-info-btn');
    const descriptionSection = document.querySelector('.section:first-of-type'); // Mengambil bagian deskripsi

    toggleButton.addEventListener('click', function() {
        if (descriptionSection.style.display === 'none') {
            descriptionSection.style.display = 'block';
            toggleButton.textContent = 'Sembunyikan Deskripsi';
        } else {
            descriptionSection.style.display = 'none';
            toggleButton.textContent = 'Tampilkan Deskripsi';
        }
    });
});