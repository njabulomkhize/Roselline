        // script.js
        
        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("searchInput");
            const scrollTarget = document.getElementById("scrollTarget");
        
            searchInput.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    const targetId = searchInput.value.trim();
                    const targetElement = document.getElementById(targetId);
        
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                    } else {
                        console.log("Element not found.");
                    }
                }
            });
        });