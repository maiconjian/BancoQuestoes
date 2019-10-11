create table USUARIO_PERFIL
(
   ID                   int not null,
   ID_PERFIL            int not null,
   ID_USUARIO           int not null,
   primary key (ID)
);

alter table USUARIO_PERFIL add constraint FK_REFERENCE_1 foreign key (ID_PERFIL)
      references PERFIL (ID) on delete restrict on update restrict;

alter table USUARIO_PERFIL add constraint FK_REFERENCE_2 foreign key (ID_USUARIO)
      references USUARIO (ID) on delete restrict on update restrict;
