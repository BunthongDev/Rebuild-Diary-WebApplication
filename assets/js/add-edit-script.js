// add and edit function use to add and edit the entry in the diary
document.addEventListener("DOMContentLoaded", function () {
    const entryForm = document.getElementById("entryForm");
    const backToHomeButton = document.getElementById("backToHome");
    const urlParams = new URLSearchParams(window.location.search);
    const entryIndex = urlParams.get("index");
  
    const header = document.getElementById("header");
  
    // load preferences background color and font family
    function loadPreferences() {
      const savedColor = localStorage.getItem("backgroundColor");
      const savedFont = localStorage.getItem("fontFamily");
  
      if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        header.style.backgroundColor = savedColor;
      }
  
      if (savedFont) {
        document.body.style.fontFamily = savedFont;
        header.style.fontFamily = savedFont;
      }
    }
  
    if (entryIndex !== null) {
      const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
      const entry = entries[entryIndex];
  
      document.getElementById("title").value = entry.title;
      document.getElementById("date").value = entry.date;
      document.getElementById("content").value = entry.content;
    }
  
    
    entryForm.addEventListener("submit", function (event) {
      event.preventDefault();
    
      // retrieve values from input fields
      const title = document.getElementById("title").value;
      const date = document.getElementById("date").value;
      const content = document.getElementById("content").value;
  
      let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  
      if (entryIndex === null) {
        entries.push({ title, date, content });
      } else {
        entries[entryIndex] = { title, date, content };
      }
      // save updated entries to localStorage
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
      window.location.href = "../index.html";
    });
  
    backToHomeButton.addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  
    loadPreferences();
  });
