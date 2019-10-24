create table USUARIO (
   ID                   int                  identity,
   NOME                 varchar(50)          not null,
   EMAIL                varchar(50)          not null,
   LOGIN                varchar(20)          not null,
   SENHA                varchar(150)         null,
   CODIGO_ACESSO        varchar(150)          null,
   SOLICITA_SENHA       smallint             not null,
   ATIVO                smallint             not null,
   ID_UNIDADE_ADM           int                  not null,
   MATRICULA            int                  not null,
   constraint PK_USUARIO primary key nonclustered (ID)
)
go

alter table USUARIO
   add constraint FK_USUARIO_REFERENCE_UNIDADE foreign key (ID_UNIDADE_ADM)
      references UNIDADE_ADM (ID)
go
