export const CalcWindowHightWithPostion = (percentage: number) => {
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Get the current scroll position
  const scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop;

  // Calculate percentage of the scroll height
  const percentOfScrollHeight =
    (scrollPosition / pageHeight) * percentage * pageHeight;

  return percentOfScrollHeight;
};

export const CalcWindowHight = (percentage: number) => {
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Calculate 30% of the total scroll height
  const thirtyPercentOfTotalScrollHeight = percentage * pageHeight;

  return thirtyPercentOfTotalScrollHeight;
};
