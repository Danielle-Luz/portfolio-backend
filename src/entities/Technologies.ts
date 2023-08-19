import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Stack } from "../enums/Stack";
import { KnowledgeLevel } from "../enums/KnowledgeLevel";

@Entity()
export class Technologies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({
    type: "enum",
    enum: Stack,
  })
  stack: Stack;

  @Column({
    type: "enum"
    enum: KnowledgeLevel,
    default: KnowledgeLevel.BEGINNER,
    nullable: true
  })
  knowledgeLevel;
}
