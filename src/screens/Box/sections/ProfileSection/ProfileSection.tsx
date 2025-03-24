import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ProfileSection = (): JSX.Element => {
  // Profile data
  const skills = [
    "React Native",
    "iOS Development",
    "Android Development",
    "Flutter",
    "TypeScript",
    "Firebase",
    "AWS Mobile",
    "GraphQL",
    "REST APIs",
    "CI/CD",
    "Unit Testing",
    "App Store Optimization",
  ];

  const workExperiencePoints = [
    "Led development of enterprise mobile applications serving 1M+ users",
    "Architected and implemented microservices-based backend infrastructure",
    "Reduced app crash rate by 75% through comprehensive error handling and testing",
    "Mentored team of 6 junior developers and established best practices",
    "Implemented automated CI/CD pipeline reducing deployment time by 60%",
  ];

  const projectAchievements = [
    "500K+ downloads in first 3 months",
    "4.8 star rating on App Store",
    "Featured in App Store Health & Fitness category",
    "Processing 2M+ health data points daily",
  ];

  const projectTechnologies = [
    "React Native",
    "Firebase",
    "HealthKit",
    "TensorFlow Lite",
  ];

  const languages = [
    { language: "English", level: "Native" },
    { language: "Mandarin", level: "Fluent" },
  ];

  const certifications = [
    {
      name: "AWS Certified Mobile Developer",
      issuer: "Amazon Web Services",
      issued: "Dec 2022",
      expiration: "Dec 2025",
    },
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      issued: "Mar 2021",
      expiration: "No Expiration",
    },
    {
      name: "iOS Development Certification",
      issuer: "Apple",
      issued: "Jan 2020",
      expiration: "No Expiration",
    },
  ];

  return (
    <div className="w-full max-w-[476px] bg-[#f8f7ff] font-sans">
      {/* Header */}
      <header className="w-full h-[81px] bg-white shadow-sm">
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-4">
            <span className="font-black text-xl text-[#00000033]">
              NERDREZULT
            </span>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-600 font-medium px-2 py-1"
            >
              Beta
            </Badge>
          </div>
          <Button className="bg-blue-600 text-white">DONE</Button>
        </div>
      </header>

      {/* Main Profile Card */}
      <Card className="w-[434px] mx-5 mt-5 mb-5 shadow-sm rounded-xl">
        <CardContent className="p-0">
          {/* Profile Header */}
          <div className="relative">
            {/* Profile Image */}
            <div className="absolute w-[120px] h-[120px] top-8 left-8">
              <img
                className="w-[120px] h-[120px] object-cover"
                alt="Profile"
                src="/rectangle.png"
              />
              <div className="absolute top-[77px] left-9 text-[32px] leading-[48px] font-semibold text-white">
                SC
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 absolute top-8 left-[191px]">
              <div className="w-[52px] h-9 bg-slate-50 rounded-lg flex items-center justify-center">
                <img className="w-5 h-5" alt="Social" src="/frame-1.svg" />
              </div>
              <div className="w-[52px] h-9 bg-slate-50 rounded-lg flex items-center justify-center">
                <img className="w-5 h-5" alt="Social" src="/frame-5.svg" />
              </div>
              <div className="w-[52px] h-9 bg-slate-50 rounded-lg flex items-center justify-center">
                <img className="w-5 h-5" alt="Social" src="/frame-4.svg" />
              </div>
            </div>

            {/* Contact Button */}
            <Button className="absolute top-[76px] left-[167px] w-[239px] bg-blue-600 text-white">
              Contact Me
            </Button>

            {/* Download Resume Button */}
            <Button
              variant="outline"
              className="absolute top-[129px] left-[167px] w-[239px] border-slate-200 text-slate-900 font-medium"
            >
              Download Resume
            </Button>

            {/* Profile Info */}
            <div className="pt-[175px] px-8 pb-8">
              <h2 className="text-2xl font-semibold text-slate-900 leading-9">
                Sarah Chen
              </h2>
              <p className="text-base text-slate-500 leading-6 mt-1">
                Senior Mobile Developer
              </p>

              <div className="flex items-center mt-4">
                <span className="text-sm text-slate-500">⭐</span>
                <span className="text-sm text-slate-500 ml-2">4.9</span>
                <span className="text-sm text-slate-500 ml-1">rating</span>
                <span className="text-sm text-slate-500 mx-2">•</span>
                <span className="text-sm text-slate-500">
                  San Francisco, CA
                </span>
              </div>

              <Badge className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-[20px] absolute top-[203px] left-[294px]">
                Available Now
              </Badge>

              {/* About Section */}
              <div className="mt-[100px]">
                <h3 className="text-lg font-semibold text-slate-900 leading-[27px]">
                  About
                </h3>
                <p className="text-sm text-slate-500 leading-6 mt-5 max-w-[361px]">
                  Senior Mobile Developer with 8+ years of experience crafting
                  high-performance, user-centric mobile applications.
                  Specialized in cross-platform development using React Native
                  and Flutter, with deep expertise in native iOS and Android
                  development. Known for delivering scalable solutions that
                  combine technical excellence with exceptional user experience.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900 leading-[27px]">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-50 text-blue-600 font-normal px-3 py-[11px] h-10 rounded"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900 leading-[27px]">
                  Work Experience
                </h3>
                <Separator className="my-4 bg-slate-200" />

                <h4 className="text-base font-semibold text-slate-900 leading-6">
                  Senior Mobile Developer
                </h4>
                <p className="text-sm text-slate-500 leading-[21px] mt-2">
                  TechCorp Inc.
                </p>
                <p className="text-sm text-slate-500 leading-[21px] mt-2">
                  Jan 2021 - Present
                </p>
                <p className="text-sm text-slate-500 leading-[21px] mt-1">
                  San Francisco, CA
                </p>

                <ul className="mt-4 space-y-5">
                  {workExperiencePoints.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-500 leading-[21px] ml-[44px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Project Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900 leading-[27px]">
                  Featured Project
                </h3>
                <Separator className="my-4 bg-slate-200" />

                <h4 className="text-base font-semibold text-slate-900 leading-6">
                  HealthTrack Pro
                </h4>
                <p className="text-sm text-slate-500 leading-[21px] mt-2">
                  FitnessCo
                </p>
                <p className="text-sm text-slate-500 leading-[21px] mt-2">
                  2023
                </p>

                <p className="text-sm text-slate-500 leading-[21px] mt-4 max-w-[343px]">
                  A comprehensive health monitoring application with real-time
                  tracking and AI-powered insights
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {projectTechnologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-50 text-blue-600 font-normal px-3 py-[11px] h-10 rounded"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-5 space-y-2">
                  {projectAchievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-500 leading-[21px] ml-[44px]"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center mt-5">
                  <img className="w-4 h-4" alt="GitHub" src="/frame-10.svg" />
                  <a
                    href="#"
                    className="text-sm text-blue-600 leading-[21px] ml-2"
                  >
                    github.com/sarahchen/healthtrack-pro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Languages and Certifications Card */}
      <Card className="w-[434px] mx-5 mb-5 shadow-sm rounded-xl">
        <CardContent className="p-6">
          {/* Languages Section */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 leading-6">
              Languages
            </h3>

            <div className="mt-4 space-y-4">
              {languages.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-sm text-slate-500 leading-[21px]">
                    {item.language}
                  </span>
                  <span className="text-sm text-slate-500 leading-[21px]">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-8">
            <h3 className="text-base font-semibold text-slate-900 leading-6">
              Certifications
            </h3>

            <div className="mt-4 space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border border-slate-200 rounded-lg"
                >
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-slate-900 leading-[21px]">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-[18px] mt-2">
                      {cert.issuer}
                    </p>
                    <div className="flex justify-between mt-3">
                      <span className="text-xs text-slate-500 leading-[18px]">
                        Issued: {cert.issued}
                      </span>
                      <span className="text-xs text-slate-500 leading-[18px]">
                        {cert.expiration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
