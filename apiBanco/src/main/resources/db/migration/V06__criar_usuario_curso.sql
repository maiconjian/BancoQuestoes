create table USUARIO_CURSO (
   ID                   int                  identity,
   ID_USUARIO           int                  not null,
   ID_CURSO             int                  not null,
   constraint PK_USUARIO_CURSO primary key nonclustered (ID)
)
go

alter table USUARIO_CURSO
   add constraint FK_USUARIO__REFERENCE_CURSO foreign key (ID_CURSO)
      references CURSO (ID)
go

alter table USUARIO_CURSO
   add constraint FK_USUARIOc__REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID)
go
