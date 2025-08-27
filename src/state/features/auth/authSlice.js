import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async ({ name, role, email, password, avatar }, thunkAPI) => {
        try {
            const formData = new FormData();

            formData.append("name", name);
            formData.append("role", role);
            formData.append("email", email);
            formData.append("password", password);

            if (avatar) {
                formData.append("avatar", avatar);
            }
            const response = await api.post("/createUser",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
            )
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message || "Signup failed"
            );
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
        logout: (state) => {
            state.user = null,
                state.loading = false,
                state.error = null
        },
        resetAuth: (state) => {
            state.user = null,
            state.loading = false;
            state.error = null;
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

export const { logout, resetAuth } = authSlice.actions;
export default authSlice.reducer;