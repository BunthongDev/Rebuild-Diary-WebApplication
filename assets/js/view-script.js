document.addEventListener("DOMContentLoaded", function () {
  const entryDetails = document.getElementById("entryDetails");
  const backToHomeButton = document.getElementById("backToHome");
  const editEntryButton = document.getElementById("editEntry");
  const deleteEntryButton = document.getElementById("deleteEntry");
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
  loadPreferences();


  // view entry delete or edit form
  if (entryIndex !== null) {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    const entry = entries[entryIndex];

    document.getElementById("entryTitle").innerText = entry.title;
    document.getElementById("entryDate").innerText = entry.date;
    document.getElementById("entryContent").innerText = entry.content;

    editEntryButton.addEventListener("click", function () {
      window.location.href = `add-edit.html?index=${entryIndex}`;
    });

    deleteEntryButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this entry?")) {
        entries.splice(entryIndex, 1);
        localStorage.setItem("diaryEntries", JSON.stringify(entries));
        window.location.href = "../index.html";
      }
    });
  } else {
    entryDetails.innerText = "No entry found!";
  }

  backToHomeButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

});
