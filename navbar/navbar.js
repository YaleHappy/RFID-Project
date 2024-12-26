document.addEventListener('DOMContentLoaded', function () {
  fetch('navbar.html') // 動態加載 navbar.html
      .then(response => response.text())
      .then(data => {
          document.querySelector('nav').outerHTML = data; // 替換 nav 的內容

          // 確保語言切換邏輯正確綁定
          const savedLang = localStorage.getItem('language') || 'zh-TW';
          if (window.setLanguage) {
              setLanguage(savedLang); // 設定語言
          } else {
              console.error('setLanguage 函數未定義');
          }

          // 綁定語言切換按鈕
          document.querySelectorAll('.language-switch .dropdown-item').forEach((btn) => {
              btn.addEventListener('click', (e) => {
                  const selectedLang = e.target.getAttribute('data-lang');
                  setLanguage(selectedLang);
              });
          });
      })
      .catch(error => console.error('Error loading navbar:', error));
});


document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "zh-TW";
  setLanguage(savedLang);

  // 綁定語言切換按鈕
  document.querySelectorAll(".language-switch .dropdown-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedLang = e.target.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });
});


