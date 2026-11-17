function openModal(e) {
    e.preventDefault();
    document.getElementById('aboutModal').classList.add('active');
}

function closeModal() {
    document.getElementById('aboutModal').classList.remove('active');
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
