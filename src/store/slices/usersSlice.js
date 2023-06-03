import {createSlice} from '@reduxjs/toolkit';
import { fetctUsers } from '../thunks/fetchUsers';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetctUsers.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(fetctUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase(fetctUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;

        });
    }
});

export const usersReducer = userSlice.reducers;