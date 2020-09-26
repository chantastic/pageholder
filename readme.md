# pageholder

Takes a number of pages and a current page and returns an array of up to 9 pages with first, last, current, +2 on each side, and ellipsis where results are truncated.

```
paginate({ pages: 100, page: 75 });

// => [1, "…", 73, 74, 75, 76, 77, "…", 100]
```

License: MIT
Copyright &copy; Michael Chan