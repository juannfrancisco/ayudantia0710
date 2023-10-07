import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    artist: string;

    @Column()
    album: string;

    @Column()
    year: number;
}