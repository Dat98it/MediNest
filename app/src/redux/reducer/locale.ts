import {createSlice} from '@reduxjs/toolkit';
import {Locale} from '@src/types';

interface initialState {
  locale: Locale;
}

const initialState: initialState = {
  locale: 'vi',
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const {setLocale} = localeSlice.actions;

export const localeSelector = (state: {locale: initialState}) =>
  state.locale.locale;
