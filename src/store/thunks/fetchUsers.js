import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3132/users');

    await pause(2000)
    return response.data;
});

const pause = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

export { fetchUsers };