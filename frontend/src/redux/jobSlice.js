import { createSlice } from "@reduxjs/toolkit";
import Jobs from "../components/Jobs";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allAdminJobs: [],
    allJobs: [],
    singleJob: null,
      searchJobByText: "",
      allAppliedJobs: [],
    searchedQuery:"",
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
      },
      setAllAppliedJobs: (state, action) => {
        state.allAppliedJobs = action.payload;
      },
      setSearchedQuery: (state, action) => {
        state.searchedQuery = action.payload;
    }
  },
});
export const { setAllJobs,setSearchedQuery,setAllAppliedJobs ,setSingleJob,setAllAdminJobs,setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer