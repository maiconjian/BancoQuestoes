create table UNIDADE_CURRICULAR (
   ID                   int                  identity,
   NOME                 varchar(50)          not null,
   CARGA_HORARIA        int                  not null,
   ID_CURSO             int                  not null,
   ATIVO                smallint             not null,
   constraint PK_UNIDADE_CURRICULAR primary key nonclustered (ID)
)
go

alter table UNIDADE_CURRICULAR
   add constraint FK_UNIDADE__REFERENCE_CURSO foreign key (ID_CURSO)
      references CURSO (ID)
go


INSERT INTO UNIDADE_CURRICULAR(NOME,CARGA_HORARIA,ID_CURSO,ATIVO)
VALUES('Analise de Sistemas',170,1,1)

INSERT INTO UNIDADE_CURRICULAR(NOME,CARGA_HORARIA,ID_CURSO,ATIVO)
VALUES('Seguranca da Informacao',30,1,1)

INSERT INTO UNIDADE_CURRICULAR(NOME,CARGA_HORARIA,ID_CURSO,ATIVO)
VALUES('Projeto de banco de dados',60,1,1)

INSERT INTO UNIDADE_CURRICULAR(NOME,CARGA_HORARIA,ID_CURSO,ATIVO)
VALUES('Arquitetura de Redes',170,1,1)