export interface ProjectCardProps {
    title: string;
    description: string;
    imageDirectory?: string;
    onCardClick: () => void;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    imageDirectory?: string;
}