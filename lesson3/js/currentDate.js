const yearoptions = {year: "numeric"}
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", yearoptions);

document.getElementById("updateddate").textContent = document.lastModified