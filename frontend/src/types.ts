export interface ProjectCardProps {
    title: string;
    description: string;
    imageDirectory?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    imageDirectory?: string;
}