const currencyFormatter = (text: string): string => {

  const numericValue = text?.replace(/[^0-9.]/g, '');
  
  const numberValue = parseFloat(numericValue);

  if (!isNaN(numberValue)) {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(numberValue);
  } else {
    return '';
  }
  
};

export { currencyFormatter };

