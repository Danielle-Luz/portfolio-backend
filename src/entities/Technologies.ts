import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { KnowledgeLevel, Stack } from "../enums";

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
