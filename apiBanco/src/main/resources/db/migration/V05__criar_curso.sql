create table CURSO (
   ID                   int                  identity,
   NOME                 varchar(100)          not null,
   NIVEL                varchar(50)          not null,
   FASES                int                  not null,
   ATIVO                smallint             not null,
   constraint PK_CURSO primary key nonclustered (ID)
)
go

insert into CURSO(NOME,NIVEL,FASES,ATIVO)
VALUES('Analise e Desenvolvimento de sistemas','Superiro',6,1)