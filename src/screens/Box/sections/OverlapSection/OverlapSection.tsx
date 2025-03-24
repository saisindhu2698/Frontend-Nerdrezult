import { FilterIcon, SearchIcon, StarIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Developer data for mapping
const developers = [
  {
    id: 1,
    initials: "SC",
    name: "Sarah Chen",
    role: "Senior Mobile Developer",
    rating: 4.9,
    location: "San Francisco, CA",
    availability: { status: "Available Now", color: "green" },
  },
  {
    id: 2,
    initials: "MT",
    name: "Michael Torres",
    role: "Full Stack Developer",
    rating: 4.8,
    location: "New York, NY",
    availability: { status: "Available in 2 weeks", color: "orange" },
    experience: [
      { label: "8+ years" },
      { label: "42 Projects" },
      { label: "$135/hr" },
    ],
    skills: ["React", "Node.js", "Python", "AWS"],
  },
  {
    id: 3,
    initials: "AP",
    name: "Aisha Patel",
    role: "Blockchain Developer",
    rating: 4.8,
    location: "London, UK",
    availability: { status: "Available in 1 week", color: "orange" },
  },
];

export const OverlapSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[476px] bg-white">
      <div className="relative w-full h-full bg-[#f8f7ff]">
        {/* Header */}
        <header className="w-full h-[68px] bg-white shadow-sm flex items-center justify-between px-5">
          <div className="flex items-center">
            <div className="text-black text-xl leading-[30px] font-black [font-family:'Inter',Helvetica] tracking-[0]">
              NERDREZULT
            </div>
            <Badge className="ml-6 bg-blue-50 text-blue-600 font-medium">
              Beta
            </Badge>
          </div>
          <div className="font-normal [font-family:'Inter',Helvetica] text-slate-500 text-sm text-center tracking-[0] leading-[21px]">
            Sign out
          </div>
        </header>

        {/* Navigation Tabs */}
        <Tabs defaultValue="developers" className="w-full">
          <TabsList className="w-full h-[57px] bg-white grid grid-cols-2">
            <TabsTrigger
              value="projects"
              className="[font-family:'Inter',Helvetica] font-normal text-blue-600 text-base"
            >
              Available Projects
            </TabsTrigger>
            <TabsTrigger
              value="developers"
              className="[font-family:'Inter',Helvetica] font-normal text-blue-600 text-base data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
            >
              Available Developers
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Separator className="w-full" />

        {/* SearchIcon and Filters */}
        <div className="flex gap-4 p-4">
          <div className="relative">
            <Input
              className="w-40 h-10 pl-3 pr-10 rounded-lg border border-slate-200"
              placeholder="SearchIcon developers..."
            />
            <SearchIcon className="absolute w-5 h-5 top-[11px] right-3" />
          </div>

          <Button
            variant="outline"
            className="h-[39px] rounded-lg border border-slate-200 flex items-center gap-2"
          >
            <FilterIcon className="w-5 h-5" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm">
              Filters
            </span>
          </Button>

          <Button variant="ghost" className="h-[39px] rounded-lg bg-[#d9d9d9]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm">
              Most Recent
            </span>
          </Button>
        </div>

        {/* Developer Cards */}
        <div className="px-4 space-y-4">
          {developers.map((developer) => (
            <Card key={developer.id} className="w-full rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <Avatar className="w-6 h-6 bg-blue-600 text-white [font-family:'Inter',Helvetica] font-semibold text-base">
                      {developer.initials}
                    </Avatar>

                    <div className="ml-6">
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-slate-900 text-base leading-6">
                        {developer.name}
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm mt-1">
                        {developer.role}
                      </div>
                      <div className="flex items-center mt-3 text-sm text-slate-500">
                        <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="ml-1">{developer.rating} rating</span>
                        <span className="mx-2">•</span>
                        <span>{developer.location}</span>
                      </div>
                    </div>
                  </div>

                  <Badge
                    className={`h-10 px-4 rounded-[20px] ${
                      developer.availability.color === "green"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-50 text-orange-800"
                    } font-semibold text-xs`}
                  >
                    {developer.availability.status}
                  </Badge>
                </div>

                {/* Expanded details for Michael Torres */}
                {developer.id === 2 && (
                  <>
                    <Separator className="my-6" />

                    <div>
                      <h3 className="[font-family:'Inter',Helvetica] font-semibold text-slate-900 text-sm mb-4">
                        Experience &amp; Skills
                      </h3>

                      <div className="flex gap-4 mb-6">
                        {developer.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="w-auto h-16 bg-[#f8f7ff] rounded-lg flex items-center justify-center px-4"
                          >
                            <div className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm">
                              {exp.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {developer.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            className="bg-blue-50 text-blue-600 font-normal text-xs h-[38px] px-3 py-2.5 rounded"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button className="h-[45px] rounded-lg bg-blue-600 text-white font-medium text-sm">
                          Hire Now
                        </Button>
                        <Button
                          variant="outline"
                          className="h-[45px] rounded-lg border-blue-600 text-blue-600 font-medium text-sm"
                        >
                          Message
                        </Button>
                        <Button
                          variant="outline"
                          className="h-[45px] rounded-lg border-slate-200 text-slate-500 font-medium text-sm"
                        >
                          View Resume
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
