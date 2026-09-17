export type SkillStatus = 'Learning' | 'Practising' | 'Exploring';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming & Web' | 'Systems & Security' | 'Cybersecurity' | 'Creative' | 'Tools';
  status: SkillStatus;
  iconName: string;
  detail: string;
}

export type ProjectStatus = 'Building' | 'Exploring' | 'Learning';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  fullOverview: string;
  technologies: string[];
  status: ProjectStatus;
  highlights: string[];
  visualType: 'portfolio' | 'graphics' | 'aivideo' | 'webdev' | 'security';
  liveLinkText?: string;
}

export interface TerminalOutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system' | 'success';
  text: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
}
