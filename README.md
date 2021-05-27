Caso banco não tenha o módulo para gerar uuid : 

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

query para adicionar tipos de telefone 

insert into telefone_tipo(tipo, whatsapp) values('celular', true), ('telefone fixo', false);
