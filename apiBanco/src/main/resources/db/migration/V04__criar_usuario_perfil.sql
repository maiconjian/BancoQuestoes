create table USUARIO_PERFIL (
   ID                   int                  identity,
   ID_PERFIL            int                  not null,
   ID_USUARIO           int                  not null,
   constraint PK_USUARIO_PERFIL primary key nonclustered (ID)
)
go

alter table USUARIO_PERFIL
   add constraint FK_USUARIO__REFERENCE_PERFIL foreign key (ID_PERFIL)
      references PERFIL (ID)
go

alter table USUARIO_PERFIL
   add constraint FK_USUARIO__REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID)
go