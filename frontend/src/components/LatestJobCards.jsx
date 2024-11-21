import React from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();

  return (
    <div
      // Uncomment the line below if you want to enable navigation on card click
      // onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-xl text-[#1f2937]">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
        <span className="text-sm text-gray-400">Posted 2 days ago</span>
      </div>
      <div className="my-3">
        <h2 className="font-bold text-lg text-[#1f2937]">{job?.title}</h2>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType} 
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
