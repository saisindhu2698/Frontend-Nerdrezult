import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectOverviewSection = (): JSX.Element => {
  // Job responsibilities data
  const responsibilities = [
    "Design and implement scalable backend services",
    "Optimize database performance and queries",
    "Implement security best practices",
    "Write comprehensive technical documentation",
    "Collaborate with frontend teams",
  ];

  // Required skills data
  const requiredSkills = [
    "5+ years backend development experience",
    "Strong knowledge of microservices architecture",
    "Experience with Node.js and Python",
    "Expertise in SQL and NoSQL databases",
    "Understanding of cloud platforms (AWS/GCP)",
  ];

  // Project details data
  const projectDetails = [
    { label: "Duration", value: "6 months" },
    { label: "Budget", value: "$25,000" },
    { label: "Experience Required", value: "5+ years" },
    { label: "Active Clients", value: "5 working now" },
  ];

  return (
    <div className="w-full max-w-[476px] bg-white">
      <div className="relative w-full h-full bg-[#f8f7ff]">
        <header className="w-full h-16 bg-white shadow-[0px_1px_2px_#0000000d] flex items-center px-6">
          <img className="w-8 h-8" alt="Frame" src="/frame-3.svg" />
          <div className="ml-2 font-black text-[#00000033] text-xl leading-[30px] font-['Inter',Helvetica]">
            NerdRezult
          </div>
          <Badge
            variant="outline"
            className="ml-6 bg-blue-50 text-blue-600 border-0"
          >
            Beta
          </Badge>
          <div className="ml-auto font-normal text-slate-500 text-sm leading-[21px] font-['Inter',Helvetica]">
            Sign out
          </div>
        </header>

        <Card className="m-6 rounded-xl shadow-[0px_1px_3px_#0000001a] relative">
          <CardContent className="p-8">
            <div className="flex justify-between items-start">
              <h1 className="font-semibold text-slate-900 text-2xl leading-9 font-['Inter',Helvetica]">
                Senior Backend Engineer
              </h1>
              <button className="text-slate-500 text-2xl leading-9 font-normal">
                <XIcon />
              </button>
            </div>

            <div className="flex items-center mt-3 text-sm text-slate-500 font-['Inter',Helvetica]">
              <span>$25,000</span>
              <span className="mx-2">•</span>
              <span>6 months</span>
              <span className="mx-2">•</span>
              <span>Posted today</span>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-slate-900 text-base leading-6 font-['Inter',Helvetica]">
                Project Description
              </h2>
              <p className="mt-4 font-normal text-slate-500 text-sm leading-[21px] max-w-[348px] font-['Inter',Helvetica]">
                We are seeking an experienced backend engineer to architect and
                develop scalable microservices for our enterprise platform. This
                role involves working with high-performance systems and
                implementing robust API solutions.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-slate-900 text-base leading-6 font-['Inter',Helvetica]">
                Job Responsibilities
              </h2>
              <ul className="mt-4 space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 text-xl leading-5 mr-3 font-['Inter',Helvetica]">
                      •
                    </span>
                    <span className="font-normal text-slate-500 text-sm leading-[21px] font-['Inter',Helvetica]">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-slate-900 text-base leading-6 font-['Inter',Helvetica]">
                Required Skills
              </h2>
              <ul className="mt-4 space-y-3">
                {requiredSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 text-xl leading-5 mr-3 font-['Inter',Helvetica]">
                      •
                    </span>
                    <span className="font-normal text-slate-500 text-sm leading-[21px] font-['Inter',Helvetica]">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 bg-[#f8f7ff] rounded-xl p-6">
              <h2 className="font-semibold text-slate-900 text-base leading-6 font-['Inter',Helvetica]">
                Project Details
              </h2>
              <div className="grid grid-cols-2 gap-y-6 mt-4">
                {projectDetails.slice(0, 2).map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-normal text-slate-500 text-sm leading-[21px] font-['Inter',Helvetica]">
                      {detail.label}
                    </span>
                    <span className="font-medium text-slate-900 text-sm leading-[21px] mt-1 font-['Inter',Helvetica]">
                      {detail.value}
                    </span>
                  </div>
                ))}
                {projectDetails.slice(2, 4).map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-normal text-slate-500 text-sm leading-[21px] font-['Inter',Helvetica]">
                      {detail.label}
                    </span>
                    <span className="font-medium text-slate-900 text-sm leading-[21px] mt-1 font-['Inter',Helvetica]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <Button className="rounded-[20px] bg-blue-600 text-white">
                Apply Now
              </Button>
              <Button className="rounded-[20px] bg-blue-600 text-white">
                Contact Client
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
