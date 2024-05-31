export const delay = (s: number = 5) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));
