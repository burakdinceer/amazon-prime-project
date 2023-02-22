import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState= {
    movies:[]
}

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await axios.get('https://imdb-top-100-movies.p.rapidapi.com/',{
        headers: {
            'X-RapidAPI-Key': '8541c0c127mshb5af1621c11bde1p13c28cjsn43a3bfc52ff0',
           'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
          }
      } )
      return response?.data
})


export const dataSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.movies = action.payload
        })
    }
})

export default dataSlice.reducer