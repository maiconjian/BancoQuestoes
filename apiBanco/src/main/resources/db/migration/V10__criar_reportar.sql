create table REPORTAR (
   ID                   int                  identity,
   ID_QUESTAO           int                  not null,
   DESCRICAO            text                 not null,
   ATIVO                tinyint              not null,
   FUNDAMENTO           tinyint              not null,
   ID_USUARIO_REPORTOU  int                  not null,
   constraint PK_REPORTAR primary key (ID)
)
go

alter table REPORTAR
   add constraint FK_REPORTAR_REFERENCE_QUESTAO foreign key (ID_QUESTAO)
      references QUESTAO (ID)
go

alter table REPORTAR
   add constraint FK_REPORTAR_REFERENCE_USUARIO foreign key (ID_USUARIO_REPORTOU)
      references USUARIO (ID)
go
