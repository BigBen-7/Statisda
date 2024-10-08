import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageCount: 1,
  schooldetails: {
    schoolName: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

const accountSlice = createSlice({
  name: 'accountAuth',
  initialState,
  reducers: {
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setSchoolDetails: {
      prepare(schoolName, address, email) {
        return {
          payload: {
            schoolName,
            address,
            email,
          },
        };
      },
      reducer(state, action) {
        (state.schooldetails.schoolName = action.payload.schoolName),
          (state.schooldetails.address = action.payload.address);
        state.schooldetails.email = action.payload.email;
      },
    },
    setPAssword: {
      prepare(password, confirmPassword) {
        return {
          payload: {
            password,
            confirmPassword,
          },
        };
      },
      reducer(state, action) {
        (state.password = action.payload.password),
          (state.confirmPassword = action.payload.confirmPassword);
      },
    },
    createAccount(state) {
      state.schooldetails.password = '';
      state.schooldetails.confirmPassword = '';
      state.schooldetails.schoolName = '';
      state.schooldetails.address = '';
    },
  },
});

export const { setPageCount, setSchoolDetails, setPAssword, createAccount } =
  accountSlice.actions;

export default accountSlice.reducer;
