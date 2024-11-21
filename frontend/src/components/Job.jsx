import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobId = "haishbanasl";
const daysAgoFunction = (mongodbTime) => {
  const createdAt = new Date(mongodbTime);
  const currentTime = new Date();
  const timeDifference = currentTime - createdAt;
  return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
};
  return (
    <div className="bg-[#e3edf7] p-4 rounded-lg shadow-md  border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="ghost" className="p-1 rounded-full hover:bg-gray-100">
          <Bookmark className="h-5 w-5 text-gray-700" /> {/* Smaller icon */}
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src="https://th.bing.com/th/id/OIP.e9Tb3d9LMelGlCjdOotjJQHaHa?rs=1&pid=ImgDetMain"
            alt="Company Logo"
            className="h-full w-full rounded-full"
          />
        </Avatar>
        <div>
          <h1 className="font-semibold text-base text-[#1f2937]">
            {job?.company?.name}
          </h1>
          <p className="text-xs text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg text-[#1f2937] my-1">{job?.title}</h1>
        <p className="text-sm text-gray-600 leading-tight">
          {job?.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <Badge
          className="text-blue-700 font-semibold bg-blue-100 px-2 py-1 rounded-md"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-[#F83002] font-semibold bg-red-100 px-2 py-1 rounded-md"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-[#7209b7] font-semibold bg-purple-100 px-2 py-1 rounded-md"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="bg-[#e3edf7] border-[#1f2937] text-[#1f2937] hover:bg-[#1f2937] hover:text-white transition-colors text-sm py-2 px-4"
        >
          View Details
        </Button>
        <Button className="bg-[#6C63FF] text-white hover:bg-blue-700 transition-colors text-sm py-2 px-4">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
