create table USUARIO_UNIDADE_CURRICULAR (
   ID                   int                  identity,
   ID_USUARIO           int                  not null,
   ID_UNIDADE_CURRICULAR int                  not null,
   constraint PK_USUARIO_UNIDADE_CURRICULAR primary key nonclustered (ID)
)
go

alter table USUARIO_UNIDADE_CURRICULAR
   add constraint FK_USUARIO__REFERENCE_UNIDADE_ foreign key (ID_UNIDADE_CURRICULAR)
      references UNIDADE_CURRICULAR (ID)
go

alter table USUARIO_UNIDADE_CURRICULAR
   add constraint FK_USUARIOu__REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID)
go