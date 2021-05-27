import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Cliente from './Cliente';
import TelefoneTipo from './TelefoneTipo';

@Entity('cliente_telefone')
class ClienteTelefone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @Column()
  cliente_id: string;

  @ManyToOne(() => TelefoneTipo)
  @JoinColumn({ name: 'telefone_tipo_id' })
  telefoneTipo: TelefoneTipo;

  @Column()
  telefone_tipo_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClienteTelefone;