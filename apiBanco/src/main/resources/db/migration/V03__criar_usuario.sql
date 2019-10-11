create table USUARIO
(
   ID                   int not null,
   NOME                 varchar(50) not null,
   EMAIL                varchar(50) not null,
   LOGIN                varchar(20) not null,
   SENHA                varchar(20) not null,
   CODIGO_ACESSO        varchar(10),
   SOLICITA_SENHA       tinyint ,
   ATIVO                tinyint not null,
   ID_UNIDADE       	int not null,
   primary key (ID)
);

alter table USUARIO add constraint FK_REFERENCE_8 foreign key (ID_UNIDADE)
      references UNIDADE (ID) on delete restrict on update restrict;
