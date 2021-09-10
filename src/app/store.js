import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/Dashboard/dashboardSlice';
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice';
import usersReducer from '../features/Users/usersSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    users: usersReducer,
    appSideNav: appSideNavSliceReducer,
  },
});
