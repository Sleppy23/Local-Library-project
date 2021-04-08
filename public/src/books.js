function findAuthorById(authors, id) {
  let found = authors.filter((author) => author.id === id)
  return found[0];
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let loaned = [];
  let returned = [];
  for (let book of books){
    if(book.borrows[0].returned === false){
      loaned.push(book);
    } else {
     returned.push(book);
    }
  } 
  return [loaned, returned];
}


function getBorrowersForBook(book, accounts) {
  const borrowers = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});
  return book.borrows
    .map(({ id, returned }) => ({ ...borrowers[id], returned }))
    .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
