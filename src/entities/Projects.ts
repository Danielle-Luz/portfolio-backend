import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stack } from "../enums";
import { Technologies } from "./Technologies";

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, unique: true })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({
    type: "enum",
    enum: Stack,
  })
  stack: Stack;

  @Column({ type: "text" })
  coverImage: string;

  @Column({ type: "text" })
  url: string;

  @Column({ nullable: true, default: false })
  highlight: boolean;

  @ManyToMany(() => Technologies, (technology) => technology.projects)
  @JoinTable()
  technologies: Technologies[];
}
