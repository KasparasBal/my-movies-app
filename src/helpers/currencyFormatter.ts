const currencyFormatter = (num: number): string => {
  const options = {
    style: 'currency',
    currency: 'USD',
  };

  const formattedNum = new Intl.NumberFormat(navigator.language, options).format(num);
  return formattedNum;
};

export default currencyFormatter;
