import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Patna", "Pune", "Niah"],
  },
  {
    fitlerType: "Industry",
    array: ["ABC NCR", "BCC", "CCC", "DDD"],
  },
  {
    fitlerType: "Salary",
    array: ["1 LPA", "2 LPA", "3 LPA", "4 LPA"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-[#e3edf7] p-5 rounded-lg shadow-md border border-gray-200">
      {/* Filter Title */}
      <h1 className="font-semibold text-xl text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 mb-4 border-t border-gray-300" />

      {/* Filter Options */}
      <RadioGroup className="space-y-6">
        {fitlerData.map((data, index) => (
          <div key={index}>
            {/* Section Title */}
            <h2 className="text-lg font-medium text-gray-700 mb-2 capitalize">
              {data.fitlerType}
            </h2>
            {/* Radio Options */}
            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 my-2">
                <RadioGroupItem
                  value={item}
                  className="border-gray-300 focus:ring-offset-2 focus:ring-indigo-500"
                />
                <Label className="text-gray-600 hover:text-gray-800 transition-colors duration-150 cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
