export function removeOffendingPaths() {
  // Simple Safari check
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (!isSafari) return;

  // Delay to ensure the SVG is rendered
  setTimeout(() => {
    // Adjust the selector if needed, assuming your Lottie animation is in an SVG element.
    const svg = document.querySelector("svg");
    if (svg) {
      const paths = svg.querySelectorAll('path[fill="rgb(211,109,255)"]');
      paths.forEach((path) => path.parentElement?.removeChild(path));
      console.log(`Removed ${paths.length} offending path(s) on Safari`);
    }
  }, 1); // You might need to tweak the delay depending on your animation's render time.
}
