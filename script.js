const apiKey = "0ee3b366dfba46b9a1c6ce25c7f26496";
const blogContainer = document.getElementById("blog-container");
const inputField = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-Btn");

document.addEventListener("DOMContentLoaded", () => {
  randomNews();
});

async function randomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;
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
    const clutter = `<img src="${article.urlToImage ||"images/fallBackImg.jpg" }" alt="${article.title}" 
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
    console.log("clicked")
  const query = inputField.value.trim();
    if (!query) return;
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  displayRandomNews(data.articles);
});
