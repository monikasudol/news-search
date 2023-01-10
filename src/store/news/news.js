import { createSlice } from '@reduxjs/toolkit';

// 140 80 180
// 240
export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsArticles: [],
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      newsArticles: action.payload,
    }),
  },
});

export const {
  setNews,
} = newsSlice.actions;

export default newsSlice.reducer;
