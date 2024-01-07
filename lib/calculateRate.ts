const calculateTargetAmountByBase = (baseAmount: number, rate: number) => {
  return baseAmount * rate;
};

const calculateBaseAmountByTarget = (targetAmount: number, rate: number) => {
  return targetAmount / rate;
};

export { calculateBaseAmountByTarget, calculateTargetAmountByBase };
