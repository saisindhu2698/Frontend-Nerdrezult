import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Project data for mapping
const projects = [
  {
    id: 1,
    title: "Mobile App Development",
    budget: "$15,000",
    duration: "3 months",
    postedTime: "2 days ago",
    description:
      "Looking for experienced mobile developer to build a social networking app",
    tags: ["React Native", "iOS", "Android"],
    applicants: 8,
    urgent: false,
  },
  {
    id: 2,
    title: "E-commerce Website",
    budget: "$8,000",
    duration: "2 months",
    postedTime: "5 days ago",
    description: "Need full-stack developer for online store development",
    tags: ["React", "Node.js", "MongoDB"],
    applicants: 5,
    urgent: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    budget: "$20,000",
    duration: "4 months",
    postedTime: "1 day ago",
    description:
      "Building an advanced analytics platform with machine learning capabilities",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    applicants: 12,
    urgent: true,
  },
  {
    id: 4,
    title: "Blockchain Wallet Integration",
    budget: "$12,000",
    duration: "2 months",
    postedTime: "1 week ago",
    description:
      "Implement cryptocurrency wallet features for existing platform",
    tags: ["Solidity", "Web3.js", "React"],
    applicants: 6,
    urgent: false,
  },
  {
    id: 5,
    title: "DevOps Infrastructure Setup",
    budget: "$10,000",
    duration: "1 month",
    postedTime: "3 days ago",
    description: "Setting up complete CI/CD pipeline and cloud infrastructure",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    applicants: 4,
    urgent: false,
  },
  {
    id: 6,
    title: "iOS Fitness Application",
    budget: "$18,000",
    duration: "3 months",
    postedTime: "4 days ago",
    description: "Developing a premium fitness tracking app with AI features",
    tags: ["Swift", "HealthKit", "CoreML"],
    applicants: 9,
    urgent: true,
  },
];

export const HomeScreenSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[476px] bg-white flex flex-col">
      <header className="w-full bg-white shadow-sm">
        <div className="flex items-center justify-between p-5">
          <h1 className="font-black text-xl [background:linear-gradient(90deg,rgba(42,34,56,1)_100%,rgba(67,24,209,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
            NERDREZULT
          </h1>
          <Badge variant="outline" className="bg-blue-50 text-blue-600">
            Beta
          </Badge>
          <span className="text-slate-500 text-sm">Create</span>
        </div>
      </header>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="w-full justify-start bg-white h-[67px] px-4">
          <TabsTrigger
            value="projects"
            className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:rounded-none text-base"
          >
            Available Projects
          </TabsTrigger>
          <TabsTrigger value="developers" className="text-slate-500 text-base">
            Available Developers
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Separator className="w-full bg-slate-200" />

      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center border border-slate-200 rounded-lg p-2 w-[151px] h-[39px]">
          <Input
            className="border-0 h-full p-0 focus-visible:ring-0"
            placeholder="Search"
          />
          <img className="w-5 h-5" alt="Search" src="/frame-11.svg" />
        </div>

        <div className="flex items-center border border-slate-200 rounded-lg p-2 w-[103px] h-[39px]">
          <img className="w-5 h-5" alt="Filter" src="/frame-7.svg" />
          <span className="text-slate-500 text-sm ml-2">Filters</span>
        </div>

        <div className="flex items-center bg-[#d9d9d9] rounded-lg p-2 w-[157px] h-[39px]">
          <span className="text-slate-500 text-sm">Most Recent</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-sm rounded-xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-slate-900 text-base">
                  {project.title}
                </h3>
                {project.urgent && (
                  <Badge className="bg-blue-50 text-blue-600 font-semibold text-xs rounded-[20px]">
                    Urgent
                  </Badge>
                )}
              </div>

              <div className="flex items-center mt-2 text-sm text-slate-500">
                <span>{project.budget}</span>
                <span className="mx-2">•</span>
                <span>{project.duration}</span>
                <span className="mx-2">•</span>
                <span>{project.postedTime}</span>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-blue-600 border-blue-600 rounded-[20px] py-1.5 px-4"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="text-sm text-slate-500">
                  {project.applicants} applicants
                </span>
                <Button className="bg-blue-600 text-white rounded-[20px]">
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
