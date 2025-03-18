import { createSelector } from "@reduxjs/toolkit";


const incomeSelector = state=>state.companyIncome;

const selectAnnualIncomeReportSelector = createSelector(incomeSelector,income=>income.annualIncomeReport);
const selectIncomeLoaderSelector = createSelector(incomeSelector,income=>income.isLoading);


export {selectAnnualIncomeReportSelector,selectIncomeLoaderSelector}