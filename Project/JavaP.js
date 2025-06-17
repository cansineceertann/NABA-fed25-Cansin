<script>
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // matches transition
    }, 500); // waits 5 seconds before fading out
  });
</script>
