document.addEventListener("DOMContentLoaded", function () {
  const addEntryButton = document.getElementById("addEntry");
  const entryList = document.getElementById("entryList");
  const welcomeSection = document.getElementById("welcomeSection");
  const colorPicker = document.getElementById("colorPicker");
  const fontSelector = document.getElementById("fontSelector");
  const header = document.getElementById("header");

  const greetingElement = document.getElementById('greeting');
  // this function cannot get username due to this project didn't have the database to store the user data, everything is store on user local storage
    const userName = getUserName(); // Function to get the user's name

    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good Morning';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon';
    } else {
        greetingMessage = 'Good Evening';
    }

    if (userName) {
        greetingMessage += `, ${userName}!`;
    } else {
        greetingMessage += '!';
    }

    greetingElement.textContent = greetingMessage;




  
//   button add entry
  addEntryButton.addEventListener("click", function () {
    window.location.href = "pages/add-edit.html";

    

  });

  
// change background color theme
  colorPicker.addEventListener("input", function () {
    header.style.backgroundColor = colorPicker.value;
    document.body.style.backgroundColor = colorPicker.value;
    localStorage.setItem("backgroundColor", colorPicker.value);
  });

  // change font style 
  fontSelector.addEventListener("change", function () {
    document.body.style.fontFamily = fontSelector.value;
    header.style.fontFamily = fontSelector.value;
    localStorage.setItem("fontFamily", fontSelector.value);
  });

  // load preferences background color and font family
  function loadPreferences() {
    const savedColor = localStorage.getItem("backgroundColor");
    const savedFont = localStorage.getItem("fontFamily");

    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      colorPicker.value = savedColor;
      header.style.backgroundColor = savedColor;
    }

    if (savedFont) {
      document.body.style.fontFamily = savedFont;
      fontSelector.value = savedFont;
      header.style.fontFamily = savedFont;

    }
  }



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
  loadPreferences();


  
});
// view entry button
function viewEntry(index) {
  window.location.href = `pages/view.html?index=${index}`;
}

// return username
function getUserName() {
 
  return "Buddy";
}