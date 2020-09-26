module.exports = function paginate(options = { page: 1 }) {
  const { pages, page } = options;
  const range = 5;

  let head = [1, 2, 3, 4, 5, 6, 7, "…", 10];
  let tail = [1, "…", 4, 5, 6, 7, 8, 9, 10];

  if (!pages) return [];

  if (typeof pages !== "number") return [];

  if (pages < 10) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, pages);
  }

  if (pages === 10) {
    if (page > range) {
      return tail;
    }

    return head;
  }

  if (pages > 10) {
    if (!page) {
      return [1, 2, 3, 4, 5, 6, 7, "…", pages];
    }

    if (page <= range) {
      return [1, 2, 3, 4, 5, 6, 7, "…", pages];
    }

    if (pages + 1 - page <= range) {
      return [1, "…", ...produceRange(page), pages - 1, pages];
    }

    if (pages + 1 - page > range) {
      return [1, "…", ...produceRange(page), "…", pages];
    }
  }
};

function produceRange(page) {
  return [page - 2, page - 1, page, page + 1, page + 2];
}
