export const getAllOption = (displayExpr:string, valueExpr:string, selectAllText = 'Select all') => ({
  [displayExpr]: selectAllText,
  [valueExpr]: '*',
});


export const isLastSelected = (
  index: number,
  allSelected: any[],
  numberDisplayed: number | undefined
) => index === allSelected.length - 1 || index >= (numberDisplayed || 3);
