const axios = require("axios");

const BASE_URL = "http://localhost:5000";


// 1. Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("All Books:");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


// 2. Get book by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(`Book with ISBN ${isbn}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


// 3. Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log(`Books by author ${author}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


// 4. Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log(`Books with title ${title}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};


// Run all four functions
async function main() {
  await getAllBooks();
  await getBooksByISBN(1);
  await getBooksByAuthor("Chinua Achebe");
  await getBooksByTitle("Things Fall Apart");
}

main();


// Export functions
module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};