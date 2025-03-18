import { createSelector } from "@reduxjs/toolkit";


const incomeSelector = state=>state.companyIncome;

const selectAnnualIncomeReport = createSelector(incomeSelector,income=>income.annualIncomeReport);
const selectIncomeLoader = createSelector(incomeSelector,income=>income.isLoading);


export {selectAnnualIncomeReport,selectIncomeLoader}