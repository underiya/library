import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELED = 'canceled',
}
@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  handover_id: number;

  @Column()
  payment_date: Date;

  @Column()
  amount: number;

  @Column()
  status: PaymentStatus;
}
