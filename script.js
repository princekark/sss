document.getElementById("change-color-btn").addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  document.getElementById("add-element-btn").addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added element!";
    newElement.style.color = getRandomColor();
    document.getElementById("dynamic-content").appendChild(newElement);
  });
  
  document.getElementById("toggle-visibility-btn").addEventListener("click", () => {
    const contentDiv = document.getElementById("dynamic-content");
    contentDiv.style.display = contentDiv.style.display === "none" ? "block" : "none";
  });
  
  document.getElementById("animate-element-btn").addEventListener("click", () => {
    const contentDiv = document.getElementById("dynamic-content");
    contentDiv.style.transition = "transform 0.5s";
    contentDiv.style.transform = "rotate(360deg)";
    setTimeout(() => {
      contentDiv.style.transform = "rotate(0)";
    }, 500);
  });
  
  document.getElementById("modify-text-btn").addEventListener("click", () => {
    document.querySelector("header h1").textContent = "Text has been modified!";
  });
  
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  