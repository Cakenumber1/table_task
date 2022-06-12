// 1-5 pages
export const pageRangeCount = (page: number, pageCount: number) => {
  let start = page - 2;
  let end = page + 2;
  if (end > pageCount) {
    start -= (end - pageCount);
    end = pageCount;
  }
  if (start <= 0) {
    end += ((start - 1) * (-1));
    start = 1;
  }
  end = end > pageCount ? pageCount : end;
  start--;

  return { start, end };
};
