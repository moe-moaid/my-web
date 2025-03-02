import { ListItem } from "@/typings";
import React from "react";
import AboutForm from "./aboutForm";
import ContactForm from "./contactForm";
import ExperienceForm from "./experienceForm";
import HeroForm from "./heroForm";
import ProjectsForm from "./projectsForm";
import SkillsForm from "./skillsForm";
import TechsForm from "./techsForm";

type Props = {
  menueStatus: ListItem[];
};

const componentMap: Record<string, React.FC<Props>> = {
    AboutForm,
    ContactForm,
    ExperienceForm,
    HeroForm,
    ProjectsForm,
    SkillsForm,
    TechsForm,
}

export default function RenderForms({ menueStatus }: Props) {
    let activeTab = menueStatus.find((item, id) => {
        return item.status === true;
    });
    console.log(activeTab);
    
    return (

<div className="flex-1 flex-row justify-center">
            <h1>
                {
                    activeTab ? (
                        React.createElement(componentMap[activeTab.component])
                    ) : (
                        ""
                )}
            </h1>
        </div>
    )
}
