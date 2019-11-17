create table QUESTAO (
   ID                   int                  identity,
   ID_UNIDADE_CURRICULAR int                  not null,
   ID_AUTOR             int                  not null,
   CAPACIDADE           varchar(3)           not null,
   OBJETO_CONHECIMENTO  varchar(50)          not null,
   DIFICULDADE          varchar(15)          not null,
   ENUNCIADO            text                 not null,
   SUPORTE              text                 not null,
   COMANDO              text                 not null,
   ID_ALTERNATIVA_A     int                  not null,
   ID_ALTERNATIVA_B     int                  not null,
   ID_ALTERNATIVA_C     int                  not null,
   ID_ALTERNATIVA_D     int                  not null,
   ID_ALTERNATIVA_E     int                  not null,
   PUBLICADO            tinyint              not null,
   REJEITADO            tinyint              not null,
   constraint PK_QUESTAO primary key (ID)
)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_USUARIO foreign key (ID_AUTOR)
      references USUARIO (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_ALTERNAT_A foreign key (ID_ALTERNATIVA_A)
      references ALTERNATIVA (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_ALTERNAT_B foreign key (ID_ALTERNATIVA_B)
      references ALTERNATIVA (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_ALTERNAT_C foreign key (ID_ALTERNATIVA_C)
      references ALTERNATIVA (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_ALTERNAT_D foreign key (ID_ALTERNATIVA_D)
      references ALTERNATIVA (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_ALTERNAT_E foreign key (ID_ALTERNATIVA_E)
      references ALTERNATIVA (ID)
go

alter table QUESTAO
   add constraint FK_QUESTAO_REFERENCE_UNIDADE_ foreign key (ID_UNIDADE_CURRICULAR)
      references UNIDADE_CURRICULAR (ID)
go