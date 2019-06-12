import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import Story from "./story";
import User from "./user";

@Entity()
export default class Line {

    @PrimaryGeneratedColumn(`uuid`)
    public id: string;

    @Column({ nullable: false })
    public text: string;

    @ManyToOne((type) => User, (user) => user.lines)
    @JoinColumn()
    public user: User;

    @ManyToOne((type) => Story, (story) => story.lines)
    @JoinColumn()
    public story: Story;
}