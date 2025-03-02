export interface About {
    title: string;
    description: string;
    aboutImage: file;
}

export interface ListItem {
    id: number;
    status: boolean;
    text: string;
    component: string;
}

export interface SVGIconProps {
    svg: string;
}

export interface SVGs {
    [key: string]: string;
}

export interface skills {
    svg: string;
    pro: number;
}