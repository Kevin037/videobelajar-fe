import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../api";

// Tipe kredensial login
interface LoginCredentials {
  email: string;
  password: string;
}
interface AuthState {
  user: string | null;
  loading: boolean;
  error: string | null;
  status: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  status: false,
};

export const loginUserThunk = createAsyncThunk<
  string, LoginCredentials,  {rejectValue: string}
>(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const user = await api.post('/auth/login', credentials);
      const token = user?.data?.token;
      if (user?.data?.user) {
        localStorage.setItem("user", user?.data?.user.id);
        if (user?.data?.user.photo != null) {
          localStorage.setItem("user_photo", user?.data?.user.photo); 
        }
        localStorage.setItem("token", user?.data?.token);
      }
      return token;
    } catch (err:unknown) {
        let errorMessage = "Logout failed";
        if (typeof err === "object" && err !== null && "response" in err) {
          const error = err as { response?: { data?: string }; message?: string };
          errorMessage = error.response?.data ?? error.message ?? errorMessage;
        }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOutuserThunk = createAsyncThunk<
  boolean, // return type
  void, // input type
  { rejectValue: string } // reject value
>(
  'lessons/deleteLesson',
async (_,thunkAPI) => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("user_photo");
      return true;
    } catch (err: unknown) {
        let errorMessage = "Logout failed";
        if (typeof err === "object" && err !== null && "response" in err) {
        const error = err as { response?: { data?: string }; message?: string };
        errorMessage = error.response?.data ?? error.message ?? errorMessage;
    }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("user_photo");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user = action.payload;   
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
      })
      .addCase(logOutuserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutuserThunk.fulfilled, (state) => {
        state.loading = false;
        state.status = true;  
      })
      .addCase(logOutuserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Logout failed";
        state.status = false;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;