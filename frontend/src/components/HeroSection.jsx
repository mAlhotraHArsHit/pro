import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../redux/jobSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center bg-[#e3edf7] py-16">
      {" "}
      {/* Set background color here */}
      <div className="max-w-4xl mx-auto">
        {/* Top Tagline */}
        <span className="mx-auto px-6 py-2 rounded-full bg-[#e0ebff] text-[#30538a] font-semibold text-sm tracking-wider shadow-md">
          Your Trusted Career Partner
        </span>

        {/* Hero Text */}
        <h1 className="text-5xl font-extrabold mt-8 mb-6 leading-tight text-[#1f2937]">
          Discover Jobs that Match <br />
          <span className="text-[#6C63FF]">Your Passion</span>
        </h1>

        <p className="text-lg text-gray-500 mb-12">
          Find jobs, post resumes, and start your dream career today.
        </p>

        {/* Search Bar */}
        <div className="flex w-full sm:w-[70%] lg:w-[60%] mx-auto shadow-xl border border-gray-200 pl-4 pr-2 py-2 rounded-full items-center gap-4 bg-white transition-all duration-300 hover:shadow-2xl">
          <input
            type="text"
            placeholder="Search your dream job..."
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full py-3 px-4 text-gray-700 rounded-full focus:ring-2 focus:ring-[#6C63FF] transition duration-200"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6C63FF] hover:bg-[#5A52F5] text-white py-3 px-6 transition-transform transform hover:scale-105 shadow-lg"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
