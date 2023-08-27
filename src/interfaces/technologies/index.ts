import { KnowledgeLevel, Stack } from "../../enums";

interface newTechnology {
  name: string;
  stack: Stack;
  knowledgeLevel: KnowledgeLevel;
}

type updatedTechnology = Partial<newTechnology>;

export { newTechnology, updatedTechnology };
