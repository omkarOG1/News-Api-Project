# News API Project

This is a simple news web application built using HTML, CSS, and JavaScript.  
The app fetches the latest news articles from the NewsAPI and displays them in a card layout.

When the page loads, it automatically fetches the top headlines. Users can also search for news articles by entering a keyword in the search bar.

---

## Features

- Fetches latest news using NewsAPI
- Displays news articles in a card layout
- Search functionality to find news by topic
- Clickable cards that open the full article in a new tab
- Handles missing or broken images using a fallback image
- Truncates long titles and descriptions for a cleaner layout
- Fully responsive layout for mobile, tablet, and desktop

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- NewsAPI

---

## How It Works

When the page loads, JavaScript sends a request to the NewsAPI to fetch the latest headlines.  
The API returns the data in JSON format. JavaScript then dynamically creates news cards and displays them on the page.

Users can also search for specific topics using the search bar. When a search is performed, another request is sent to the API and the results are displayed.

---

## Future Improvements

Possible improvements for this project:

- Add loading spinner while fetching news
- Add category filters (technology, sports, business)
- Add pagination or load more button
- Add dark mode

---

## API Used

https://newsapi.org/

---

## Author

Built as a practice project to improve JavaScript skills and working with APIs.
