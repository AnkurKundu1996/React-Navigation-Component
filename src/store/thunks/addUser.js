import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk('user/create', async () => {
    const response = await axios.post('http://localhost:3132/users', {
        name: faker.name.fullName()
    });

    return response.data;
});

export { addUser };

