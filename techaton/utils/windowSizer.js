export default function windowSizer() {
  let timeoutId;
  let sizeDiv;

  function showWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (!sizeDiv) {
      sizeDiv = document.createElement('div');
      sizeDiv.id = 'window-size-display';
      Object.assign(sizeDiv.style, {
          position: "fixed",
          top: 0,
          right: 0,
          background: "red",
          color: "black",
          padding: "8px 24px 8px 12px",
          borderBottomLeftRadius: "4px",
          fontFamily: "sans-serif",
          fontSize: "14px",
          zIndex: "10000",
          transition: "opacity 0.3s ease",
          opacity: "1",
      });
      document.body.appendChild(sizeDiv);
    }

    sizeDiv.textContent = `${width} x ${height}`;
    sizeDiv.style.opacity = '1';

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      sizeDiv.style.opacity = '0';
    }, 3000);
  }

  window.addEventListener('resize', showWindowSize);
};