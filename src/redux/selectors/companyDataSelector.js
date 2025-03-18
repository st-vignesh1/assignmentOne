import { createSelector } from "@reduxjs/toolkit";


const companySelector = state=>state.company;

const selectCompanyData = createSelector(companySelector,company=>company.selectedCompanyData);
const selectLoading = createSelector(companySelector,company=>company.isLoading);


export {selectCompanyData,selectLoading,companySelector};