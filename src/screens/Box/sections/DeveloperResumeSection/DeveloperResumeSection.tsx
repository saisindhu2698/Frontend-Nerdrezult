import { XIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { Separator } from "../../../../components/ui/separator";

// Developer data for mapping
const developers = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    role: "Senior Mobile Developer",
    availability: "Available Now",
    availabilityColor: "green",
    rating: "4.9",
    location: "San Francisco, CA",
    hourlyRate: "$150/hr",
    experience: "8+ years",
    projects: "42 Projects",
    skills: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter",
    ],
    isSelected: true,
  },
  {
    id: 2,
    name: "Michael Torres",
    initials: "MT",
    role: "Full Stack Developer",
    availability: "Available in 2 weeks",
    availabilityColor: "orange",
    rating: "4.8",
    location: "New York, NY",
    isSelected: false,
  },
  {
    id: 3,
    name: "Elena Kowalski",
    initials: "EK",
    role: "AI/ML Engineer",
    availability: "Available Now",
    availabilityColor: "green",
    rating: "4.9",
    location: "Boston, MA",
    isSelected: false,
  },
];

// Selected developer details
const selectedDeveloper = {
  summary:
    "Specialized in creating scalable mobile applications with a focus on performance and user experience. Led development teams at major tech companies and successfully delivered 40+ mobile applications.",
  projects: [
    "Uber-like Delivery App",
    "Healthcare Patient Portal",
    "Social Media Analytics Platform",
  ],
  education: "MS Computer Science, Stanford University",
  languages: "English, Mandarin",
  certifications: ["AWS Certified Developer", "Google Mobile Developer"],
  availability: {
    status: "Immediate",
    preference: "Remote",
    timeZone: "PST (UTC-8)",
  },
};

export const DeveloperResumeSection = (): JSX.Element => {
  return (
    <section className="relative w-full font-sans">
      {/* Available Developers List */}
      <div className="bg-white w-full">
        <div className="relative w-full">
          <div className="bg-[#f8f7ff] w-full">
            <div className="bg-white w-full h-[70px] shadow-[0px_1px_2px_#0000000d]">
              <h2 className="pt-[19px] pl-6 font-black text-black text-xl leading-[30px]">
                Available Developers
              </h2>
            </div>

            {/* Developer Cards */}
            {developers.map((developer) => (
              <Card
                key={developer.id}
                className="mx-6 my-6 shadow-[0px_1px_3px_#0000001a] rounded-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Avatar className="bg-blue-600 h-10 w-10">
                      <AvatarFallback className="text-white font-semibold">
                        {developer.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 text-base leading-6">
                          {developer.name}
                        </h3>

                        <Badge
                          className={`rounded-[20px] px-4 py-2 ${
                            developer.availabilityColor === "green"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-50 text-orange-800"
                          }`}
                        >
                          {developer.availability}
                        </Badge>
                      </div>

                      <p className="text-slate-500 text-sm leading-[21px] mt-2">
                        {developer.role}
                      </p>

                      <div className="flex items-center mt-2 text-sm text-slate-500">
                        <span>⭐</span>
                        <span className="ml-2">{developer.rating} rating</span>
                        <span className="mx-2">•</span>
                        <span>{developer.location}</span>
                      </div>

                      {developer.isSelected && (
                        <>
                          <Separator className="my-4" />

                          <div className="mt-2">
                            <h4 className="font-semibold text-slate-900 text-sm leading-[21px]">
                              Experience &amp; Skills
                            </h4>

                            <div className="flex gap-4 mt-4">
                              <div className="bg-[#f8f7ff] rounded-lg p-3 text-center">
                                <p className="text-sm text-slate-500">
                                  {developer.experience}
                                </p>
                              </div>

                              <div className="bg-[#f8f7ff] rounded-lg p-3 text-center">
                                <p className="text-sm text-slate-500">
                                  {developer.projects}
                                </p>
                              </div>

                              <div className="bg-[#f8f7ff] rounded-lg p-3 text-center">
                                <p className="text-sm text-slate-500">
                                  {developer.hourlyRate}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">
                              {developer.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  className="bg-blue-50 text-blue-600 font-normal rounded px-4 py-2"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                              <Button className="bg-blue-600 text-white">
                                Hire Now
                              </Button>

                              <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600"
                              >
                                Message
                              </Button>

                              <Button
                                variant="outline"
                                className="border-slate-200 text-slate-500"
                              >
                                View Resume
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resume Dialog */}
          <Dialog defaultOpen>
            <DialogContent className="w-[427px] p-0 rounded-xl">
              <DialogTitle className="sr-only">Developer Resume</DialogTitle>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Avatar className="bg-blue-600 h-12 w-12">
                    <AvatarFallback className="text-white font-semibold text-xl">
                      SC
                    </AvatarFallback>
                  </Avatar>

                  <div className="ml-4">
                    <h2 className="font-semibold text-slate-900 text-xl leading-[30px]">
                      Sarah Chen
                    </h2>
                    <p className="text-slate-500 text-sm leading-[21px]">
                      Senior Mobile Developer
                    </p>
                  </div>

                  <DialogClose className="ml-auto text-slate-500 text-2xl">
                    ×
                  </DialogClose>
                </div>

                <Separator className="mb-6" />

                <div className="flex gap-6">
                  <div className="w-1/2">
                    <h3 className="font-semibold text-slate-900 text-base leading-6 mb-4">
                      Professional Summary
                    </h3>
                    <p className="text-slate-500 text-sm leading-[21px] mb-8">
                      {selectedDeveloper.summary}
                    </p>

                    <h3 className="font-semibold text-slate-900 text-base leading-6 mb-4">
                      Recent Projects
                    </h3>
                    <ul className="space-y-4">
                      {selectedDeveloper.projects.map((project, index) => (
                        <li
                          key={index}
                          className="text-slate-500 text-sm leading-[21px] ml-14"
                        >
                          {project}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold text-slate-900 text-base leading-6 mt-8 mb-4">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {developers[0].skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-50 text-blue-600 font-normal rounded px-4 py-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="w-1/2">
                    <h3 className="font-semibold text-slate-900 text-base leading-6 mb-4">
                      Details
                    </h3>

                    <Card className="bg-[#f8f7ff] mb-4">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 text-sm leading-[21px] mb-2">
                          Education
                        </h4>
                        <p className="text-slate-500 text-sm leading-[21px]">
                          {selectedDeveloper.education}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#f8f7ff] mb-4">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 text-sm leading-[21px] mb-2">
                          Languages
                        </h4>
                        <p className="text-slate-500 text-sm leading-[21px]">
                          {selectedDeveloper.languages}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#f8f7ff] mb-4">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 text-sm leading-[21px] mb-2">
                          Certifications
                        </h4>
                        <ul className="space-y-2">
                          {selectedDeveloper.certifications.map(
                            (cert, index) => (
                              <li
                                key={index}
                                className="text-slate-500 text-sm leading-[21px] ml-5"
                              >
                                {cert}
                              </li>
                            ),
                          )}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#f8f7ff]">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-900 text-sm leading-[21px] mb-2">
                          Availability
                        </h4>
                        <p className="text-slate-500 text-sm leading-[21px] mb-2">
                          Status: {selectedDeveloper.availability.status}
                        </p>
                        <p className="text-slate-500 text-sm leading-[21px] mb-2">
                          Preference:{" "}
                          {selectedDeveloper.availability.preference}
                        </p>
                        <p className="text-slate-500 text-sm leading-[21px]">
                          Time Zone: {selectedDeveloper.availability.timeZone}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-[#f8f7ff] p-6 flex items-center">
                <div>
                  <p className="font-semibold text-slate-900 text-sm leading-[21px]">
                    $150/hr
                  </p>
                  <p className="text-slate-500 text-xs leading-[18px]">
                    Estimated rate
                  </p>
                </div>

                <div className="ml-auto flex gap-4">
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-500"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-blue-600 text-white">
                    Proceed to Hire
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};