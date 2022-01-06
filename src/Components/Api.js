import { createApi } from "unsplash-js";
const APP_ACCESS_KEY = process.env.REACT_APP_API_KEY;
export const API_KEY = createApi({ accessKey: APP_ACCESS_KEY });