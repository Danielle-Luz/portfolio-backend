import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ExperienceType } from "../enums/ExperienceType";

@Entity()
export class DevelopmentExperiences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: "enum", enum: ExperienceType })
  type: ExperienceType;

  @Column({ length: 50, nullable: true, default: "Empresa não informada" })
  company: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "date", nullable: true })
  startDate: string;

  @Column({ type: "date", nullable: true })
  endDate: string;
}
