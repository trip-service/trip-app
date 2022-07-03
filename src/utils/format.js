export const toNumberFormat = number => {
  return new Intl.NumberFormat('zh').format(number);
};

export const toCurrencyFormat = number => {
  // TODO: 接多國語系的設定
  return new Intl.NumberFormat('zh', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  }).format(number);
};
