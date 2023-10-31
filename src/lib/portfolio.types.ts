import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type SocialsProps = {
    id: number
    icon: IconDefinition
    url: string
}[]

export type ProjectArrType = {
    id: number;
    projectName: string;
    projectType: string;
    projectDesc: string;
    language: string;
    liveLink: string;
    framework: string;
    created: string;
    updated: string;
    html: string;
}[]