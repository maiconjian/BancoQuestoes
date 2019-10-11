create table USUARIO
(
   ID                   int not null auto_increment,
   NOME                 varchar(50) not null,
   EMAIL                varchar(50) not null,
   LOGIN                varchar(20) not null,
   SENHA                varchar(20) not null,
   CODIGO_ACESSO        varchar(10),
   SOLICITA_SENHA       tinyint not null,
   ATIVO                tinyint not null,
   primary key (ID)
);