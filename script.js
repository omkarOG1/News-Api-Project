const apiKey = "1358c0e1e96ce46cf3f9dcb72f40fc98";
const blogContainer = document.getElementById("blog-container");
const inputField = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-Btn");

document.addEventListener("DOMContentLoaded", () => {
  randomNews();
});

async function randomNews() {
  try {
    const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&pageSize=10&token=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const articles = data.articles;
    displayRandomNews(articles);
  } catch (error) {
    console.error(error, "Error fetching random news");
    return [];
  }
}

function truncateText(text, limit) {
  if (!text) return "";

  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

function displayRandomNews(articles) {
  blogContainer.innerHTML = "";

  articles.forEach((article) => {
    const blogcard = document.createElement("div");
    blogcard.classList.add("blog-card");
    const title = truncateText(article.title, 30);
    const description = truncateText(article.description, 120);
    const clutter = `<img src="${article.image || "images/fallBackImg.jpg"}" alt="${article.title}" 
     onerror="this.src='images/fallBackImg.jpg'">
    
            <h2>${title}</h2>
            <p>${description}</p>`;

    blogcard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });

    blogcard.innerHTML = clutter;
    blogContainer.appendChild(blogcard);
  });
}

searchBtn.addEventListener("click", async () => {
  console.log("clicked");
  const query = inputField.value.trim();
  if (!query) return;
  const apiUrl = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&token=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  displayRandomNews(data.articles);
});
