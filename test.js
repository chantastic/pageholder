const paginate = require("./");
const test = require("ava");

let head = [1, 2, 3, 4, 5, 6, 7, "…", 10];
let tail = [1, "…", 4, 5, 6, 7, 8, 9, 10];

test("no argements", (t) => {
  t.deepEqual(paginate(), []);
});

test("not a number", (t) => {
  t.deepEqual(paginate(), []);
});

test("...for 9 or fewer...", (t) => {
  t.deepEqual(paginate({ pages: 1 }), [1]);
  t.deepEqual(paginate({ pages: 2 }), [1, 2]);
  t.deepEqual(paginate({ pages: 3 }), [1, 2, 3]);
  t.deepEqual(paginate({ pages: 4 }), [1, 2, 3, 4]);
  t.deepEqual(paginate({ pages: 5 }), [1, 2, 3, 4, 5]);
  t.deepEqual(paginate({ pages: 6 }), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(paginate({ pages: 7 }), [1, 2, 3, 4, 5, 6, 7]);
  t.deepEqual(paginate({ pages: 8 }), [1, 2, 3, 4, 5, 6, 7, 8]);
  t.deepEqual(paginate({ pages: 9 }), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("...for 10...", (t) => {
  t.deepEqual(paginate({ pages: 10 }), head);
  t.deepEqual(paginate({ pages: 10, page: 1 }), head);
  t.deepEqual(paginate({ pages: 10, page: 2 }), head);
  t.deepEqual(paginate({ pages: 10, page: 3 }), head);
  t.deepEqual(paginate({ pages: 10, page: 4 }), head);
  t.deepEqual(paginate({ pages: 10, page: 5 }), head);
  t.deepEqual(paginate({ pages: 10, page: 6 }), tail);
  t.deepEqual(paginate({ pages: 10, page: 7 }), tail);
  t.deepEqual(paginate({ pages: 10, page: 8 }), tail);
  t.deepEqual(paginate({ pages: 10, page: 9 }), tail);
  t.deepEqual(paginate({ pages: 10, page: 10 }), tail);
});

test("...for 11", (t) => {
  t.deepEqual(paginate({ pages: 11, page: 5 }), [1, 2, 3, 4, 5, 6, 7, "…", 11]);
  t.deepEqual(paginate({ pages: 11, page: 6 }), [
    1,
    "…",
    4,
    5,
    6,
    7,
    8,
    "…",
    11,
  ]);
  t.deepEqual(paginate({ pages: 11, page: 7 }), [
    1,
    "…",
    5,
    6,
    7,
    8,
    9,
    10,
    11,
  ]);
});

test("...no page, n...", (t) => {
  t.deepEqual(paginate({ pages: 100 }), [1, 2, 3, 4, 5, 6, 7, "…", 100]);
  t.deepEqual(paginate({ pages: 100, page: 1 }), [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    "…",
    100,
  ]);
  t.deepEqual(paginate({ pages: 100, page: 5 }), [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    "…",
    100,
  ]);
  t.deepEqual(paginate({ pages: 100, page: 6 }), [
    1,
    "…",
    4,
    5,
    6,
    7,
    8,
    "…",
    100,
  ]);
  t.deepEqual(paginate({ pages: 100, page: 75 }), [
    1,
    "…",
    73,
    74,
    75,
    76,
    77,
    "…",
    100,
  ]);
  t.deepEqual(paginate({ pages: 100, page: 95 }), [
    1,
    "…",
    93,
    94,
    95,
    96,
    97,
    "…",
    100,
  ]);
  t.deepEqual(paginate({ pages: 100, page: 96 }), [
    1,
    "…",
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ]);
});
