import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { KnowledgeLevel, Stack } from "../enums";
import { Projects } from "./Projects";

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
    type: "enum",
    enum: KnowledgeLevel,
    default: KnowledgeLevel.BEGINNER,
    nullable: true,
  })
  knowledgeLevel: KnowledgeLevel;

  @ManyToMany(() => Projects, (project) => project.technologies)
  projects: Projects[];

  @Column({type: "text", nullable: true})
  iconUrl: string;
}
