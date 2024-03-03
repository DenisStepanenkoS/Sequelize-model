import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const PHONE_SLICE_NAME = 'phones';
const initial_values = {
  phones: [],
  isFetching: false,
  error: null,
};
//create
export const createPhoneThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.createPhone(payload);

      return data;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data });
    }
  }
);

//get
export const getPhoneThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPhones();
      return data;
    } catch (error) {
      return rejectWithValue({ errors: error.response.data });
    }
  }
);

//delete
export const deletePhoneThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.phoneDelete(payload);
      return payload;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

const phonesSlice = createSlice({
  name: PHONE_SLICE_NAME,
  initialState: initial_values,

  extraReducers: builder => {
    //get
    builder.addCase(getPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones = payload;
    });
    builder.addCase(getPhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
    //create
    builder.addCase(createPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones.push(payload);
    });
    builder.addCase(createPhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
    //delete
    builder.addCase(deletePhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deletePhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones = state.phones.filter(phone => payload !== phone.id);
    });
    builder.addCase(deletePhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});
const { reducer } = phonesSlice;
export default reducer;
