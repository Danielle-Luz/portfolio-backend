import { ExperienceType } from "../../enums";

interface newDevelopmentExperience {
  name: string;
  type: ExperienceType;
  company?: string;
  description: string;
  startDate?: string;
  endDate?: string;
}

type updatedDevelopmentExperience = Partial<newDevelopmentExperience>;

export { newDevelopmentExperience, updatedDevelopmentExperience };
