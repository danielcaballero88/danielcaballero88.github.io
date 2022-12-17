interface LinkObj {
  label: string;
  url: string;
  icon: 'dev' | 'github' | 'preview';
}

interface ImageObj {
  alt: string;
  src: string;
  attributionLabel?: string;
  attributionUrl?: string;
}

export interface ProjectObj {
  title: string;
  linkObjs: LinkObj[];
  imageObj: ImageObj;
}
