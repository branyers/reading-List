export function getUniqueGenres(library) {
    const genresSet = new Set();
    library.forEach(({ book }) => {
      genresSet.add(book.genre);
    });
    return Array.from(genresSet);
  }

