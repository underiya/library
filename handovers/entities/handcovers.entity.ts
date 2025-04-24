import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  book_id: number;

  @Column()
  user_id: number;

  @Column()
  issue_date: Date;

  @Column()
  return_date: Date;

  @Column()
  duration: number;
}
