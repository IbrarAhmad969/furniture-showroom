import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase/firebase"

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async ({ email, password }, thunkAPI) => {
        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            const user = userCredential.user
           
            return {
                 uid: user.uid,
                 email: user.email,
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state)=>{
            state.loading = true,
            state.error = null
        }
    },
    extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;