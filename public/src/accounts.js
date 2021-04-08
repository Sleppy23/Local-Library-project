function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA,lastNameB) => 
    lastNameA.name.last > lastNameB.name.last ? 1 : -1
  );
  return accounts; 
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const totalBorrows = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + totalBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let arr = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      if (borrow.returned === false && account.id === borrow.id) {
        arr.push(book);
      }
    })
  });
  arr.map((item) => {
    item.author = authors.find((author) => author.id === item.authorId);
  })
  return arr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
