import { KnowledgeLevel, Stack } from "../../enums";

interface newTechnology {
  name: string;
  stack: Stack;
  knowledgeLevel: KnowledgeLevel;
  iconUrl: string;
}

type updatedTechnology = Partial<newTechnology>;

export { newTechnology, updatedTechnology };
