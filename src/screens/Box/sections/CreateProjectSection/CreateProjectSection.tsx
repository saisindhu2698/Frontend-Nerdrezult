import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const CreateProjectSection = (): JSX.Element => {
  // Data for form fields
  const formFields = {
    projectTitle: {
      label: "Project Title",
      placeholder: "e.g. Senior Backend Engineer",
    },
    projectDescription: {
      label: "Project Description",
    },
    jobResponsibilities: {
      label: "Job Responsibilities",
    },
    requiredSkills: {
      label: "Required Skills",
    },
  };

  // Project details data
  const projectDetails = {
    duration: {
      label: "Duration",
      unit: "months",
    },
    budget: {
      label: "Budget",
      symbol: "$",
      placeholder: "25000",
    },
    experience: {
      label: "Experience Required",
      unit: "years",
    },
    activeClients: {
      label: "Active Clients",
      unit: "working now",
    },
  };

  return (
    <div className="w-full max-w-[476px] bg-white">
      <div className="w-full h-full bg-[#f8f7ff]">
        {/* Header */}
        <header className="w-full h-16 bg-white shadow-[0px_1px_2px_#0000000d] flex items-center px-6">
          <img className="w-8 h-8" alt="Frame" src="/frame-3.svg" />

          <div className="ml-2 [background:linear-gradient(90deg,rgba(42,34,56,1)_100%,rgba(51,79,144,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-black text-transparent text-xl leading-9 whitespace-nowrap">
            NerdRezult
          </div>

          <Badge
            variant="outline"
            className="ml-7 bg-blue-50 text-blue-600 font-normal border-none"
          >
            Beta
          </Badge>

          <div className="ml-auto font-normal [font-family:'Inter',Helvetica] text-slate-500 text-sm leading-[21px] whitespace-nowrap">
            Sign out
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          <Card className="w-full max-w-[410px] shadow-[0px_1px_3px_#0000001a]">
            <CardContent className="p-8">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-slate-900 text-2xl leading-9 mb-8">
                Add New Project
              </h2>

              {/* Project Title */}
              <div className="mb-6">
                <label className="block [font-family:'Inter',Helvetica] font-medium text-slate-500 text-sm leading-[21px] mb-2">
                  {formFields.projectTitle.label}
                </label>
                <Input
                  className="h-[42px] [font-family:'Inter',Helvetica] text-[#999999] text-base"
                  placeholder={formFields.projectTitle.placeholder}
                />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <label className="block [font-family:'Inter',Helvetica] font-medium text-slate-500 text-sm leading-[21px] mb-2">
                  {formFields.projectDescription.label}
                </label>
                <Textarea className="h-[114px] [font-family:'Inter',Helvetica]" />
              </div>

              {/* Job Responsibilities */}
              <div className="mb-6">
                <label className="block [font-family:'Inter',Helvetica] font-medium text-slate-500 text-sm leading-[21px] mb-2">
                  {formFields.jobResponsibilities.label}
                </label>
                <Button
                  variant="link"
                  className="p-0 h-auto [font-family:'Inter',Helvetica] font-normal text-blue-600 text-sm"
                >
                  + Add Responsibility
                </Button>
              </div>

              {/* Required Skills */}
              <div className="mb-6">
                <label className="block [font-family:'Inter',Helvetica] font-medium text-slate-500 text-sm leading-[21px] mb-2">
                  {formFields.requiredSkills.label}
                </label>
                <Button
                  variant="link"
                  className="p-0 h-auto [font-family:'Inter',Helvetica] font-normal text-blue-600 text-sm"
                >
                  + Add Skill
                </Button>
              </div>

              {/* Project Details */}
              <div className="bg-[#f8f7ff] rounded-xl p-6 mb-8">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-slate-900 text-base leading-6 mb-5">
                  Project Details
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Duration */}
                  <div className="mb-6">
                    <label className="block [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm leading-[21px] mb-2">
                      {projectDetails.duration.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <Input className="w-[60px] h-[31px] [font-family:'Inter',Helvetica]" />
                      <Select>
                        <SelectTrigger className="w-24 h-[29px] bg-[#f8f7ff] [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm">
                          <SelectValue placeholder="months" />
                        </SelectTrigger>
                        <SelectContent>
                          <option value="months">months</option>
                          <option value="years">years</option>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="mb-6">
                    <label className="block [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm leading-[21px] mb-2">
                      {projectDetails.budget.label}
                    </label>
                    <div className="flex items-center">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm mr-1">
                        $
                      </span>
                      <Input
                        className="w-[120px] h-[31px] [font-family:'Inter',Helvetica] text-[#999999] text-sm"
                        defaultValue={projectDetails.budget.placeholder}
                      />
                    </div>
                  </div>

                  {/* Experience Required */}
                  <div>
                    <label className="block [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm leading-[21px] mb-2">
                      {projectDetails.experience.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <Input className="w-[60px] h-[31px] [font-family:'Inter',Helvetica]" />
                      <span className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm">
                        {projectDetails.experience.unit}
                      </span>
                    </div>
                  </div>

                  {/* Active Clients */}
                  <div>
                    <label className="block [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm leading-[21px] mb-2">
                      {projectDetails.activeClients.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <Input className="w-[60px] h-[31px] [font-family:'Inter',Helvetica]" />
                      <span className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm">
                        {projectDetails.activeClients.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6">
                <Button className="rounded-[20px] bg-blue-600 [font-family:'Inter',Helvetica] font-normal text-white text-sm">
                  Create Project
                </Button>
                <Button
                  variant="outline"
                  className="rounded-[20px] [font-family:'Inter',Helvetica] font-normal text-slate-500 text-sm"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
