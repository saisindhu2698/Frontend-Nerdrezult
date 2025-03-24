import React, { useState } from "react";
import { CreateProjectSection } from "./sections/CreateProjectSection";
import { DeveloperResumeSection } from "./sections/DeveloperResumeSection";
import { HomeScreenSection } from "./sections/HomeScreenSection/HomeScreenSection";
import { LoginSection } from "./sections/LoginSection/LoginSection";
import { OverlapSection } from "./sections/OverlapSection";
import { ProfileSection } from "./sections/ProfileSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";
import { SignupSection } from "./sections/SignupSection";

type Screen = 
  | "login" 
  | "signup" 
  | "home" 
  | "developers" 
  | "profile" 
  | "createProject" 
  | "projectOverview"
  | "developerResume";

export const Box = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen);
      setPreviousScreen(null);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return <LoginSection onSignUp={() => navigateTo("signup")} onLogin={() => navigateTo("home")} />;
      case "signup":
        return <SignupSection onSignIn={() => navigateTo("login")} onSignUp={() => navigateTo("home")} />;
      case "home":
        return (
          <HomeScreenSection 
            onViewProject={(id) => navigateTo("projectOverview")}
            onViewDevelopers={() => navigateTo("developers")}
            onCreateProject={() => navigateTo("createProject")}
            onProfile={() => navigateTo("profile")}
          />
        );
      case "developers":
        return (
          <OverlapSection 
            onBack={goBack}
            onViewResume={() => navigateTo("developerResume")}
          />
        );
      case "profile":
        return <ProfileSection onBack={goBack} />;
      case "createProject":
        return <CreateProjectSection onBack={goBack} />;
      case "projectOverview":
        return <ProjectOverviewSection onBack={goBack} />;
      case "developerResume":
        return <DeveloperResumeSection onBack={goBack} />;
      default:
        return <LoginSection onSignUp={() => navigateTo("signup")} onLogin={() => navigateTo("home")} />;
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f8f7ff]">
      <div className="w-full max-w-[476px] mx-auto transition-all duration-300 ease-in-out">
        {renderScreen()}
      </div>
    </div>
  );
};