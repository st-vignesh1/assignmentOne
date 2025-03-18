import { createSelector } from "@reduxjs/toolkit";


const companySelector = state=>state.company;

const selectCompanyDataSelector = createSelector(companySelector,company=>company.selectedCompanyData);
const selectLoadingSelector = createSelector(companySelector,company=>company.isLoading);


export {selectCompanyDataSelector,selectLoadingSelector,companySelector};