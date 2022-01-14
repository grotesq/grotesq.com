export const pxToRem = (px: string | number) => (
  typeof px === 'string'
    ? `${parseInt(px, 10) / 16}rem`
    : `${px / 16}rem`);
