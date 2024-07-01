document.addEventListener("DOMContentLoaded", function () {
  const entryForm = document.getElementById("entryForm");
  const backToHomeButton = document.getElementById("backToHome");
  const urlParams = new URLSearchParams(window.location.search);
  const entryIndex = urlParams.get("index");

  if (entryIndex !== null) {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    const entry = entries[entryIndex];

    document.getElementById("title").value = entry.title;
    document.getElementById("date").value = entry.date;
    document.getElementById("content").value = entry.content;
  }

  entryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const content = document.getElementById("content").value;

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    if (entryIndex === null) {
      entries.push({ title, date, content });
    } else {
      entries[entryIndex] = { title, date, content };
    }

    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    window.location.href = "../index.html";
  });

  backToHomeButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});
