import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BookStatus {
  AVAILABLE = 'available',
  ISSUED = 'issued',
}
@Entity()
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publication_date: number;

  @Column()
  status: BookStatus;
}
