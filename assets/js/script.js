document.addEventListener("DOMContentLoaded", function () {
  const addEntryButton = document.getElementById("addEntry");
  const entryList = document.getElementById("entryList");
  const welcomeSection = document.getElementById("welcomeSection");

//   button add entry
    addEntryButton.addEventListener("click", function () {
    window.location.href = "pages/add-edit.html";

    

  });

  
  // for display the card entry content
  function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    if (entries.length > 0){
      welcomeSection.style.display = "none";
    }else {
      welcomeSection.style.display = "block";
    }

    entries.forEach((entry, index) => {
      const entryDiv = document.createElement("div");
      entryDiv.className = "entry";
      entryDiv.innerHTML = `
          <h2>${entry.title}</h2>
          <p>${entry.date}</p>
          <p>${entry.content}</p>
          <button onclick="viewEntry(${index})">View</button>
        `;
      entryList.appendChild(entryDiv);
    });
  }

  loadEntries();


  
});
// view entry button
function viewEntry(index) {
  window.location.href = `pages/view.html?index=${index}`;
}
