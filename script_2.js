
document.addEventListener('DOMContentLoaded', function() {
    const videoOverlay = document.getElementById('videoOverlay');
    const logoVideo = document.getElementById('logoVideo');

    // Event listener pour cacher la vidéo et l'arrière-plan une fois la vidéo terminée
    logoVideo.addEventListener('ended', function() {
        console.log('Video ended');
        videoOverlay.classList.add('hidden');
        document.body.classList.add('show-content');
    });

    // Optionnel: Masquer la vidéo après un certain délai (e.g., 5 secondes)
    setTimeout(function() {
        console.log('Timeout reached');
        videoOverlay.classList.add('hidden');
        document.body.classList.add('show-content');
    }, 5000); // 5000 millisecondes = 5 secondes
});
