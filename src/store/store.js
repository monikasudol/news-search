import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/news';

export default configureStore({
  reducer: {
    news: newsReducer,
  },
});
