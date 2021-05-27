import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateClienteTelefone1622049174256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cliente_telefone',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'cliente_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'telefone_tipo_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()', 
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'cliente_telefone',
            new TableForeignKey({
                name: 'ClienteId',
                columnNames: ['cliente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'cliente',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'cliente_telefone',
            new TableForeignKey({
                name: 'TelefoneTipoId',
                columnNames: ['telefone_tipo_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'telefone_tipo',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cliente_telefone');
    }

}
