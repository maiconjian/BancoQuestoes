create table PERFIL (
   ID                   int                  identity,
   NOME                 varchar(20)          not null,
   ATIVO                smallint             not null,
   constraint PK_PERFIL primary key nonclustered (ID)
)
go

Insert into PERFIL(NOME,ATIVO)VALUES('Administrador',1);
Insert into PERFIL(NOME,ATIVO)VALUES('Docente',1);
Insert into PERFIL(NOME,ATIVO)VALUES('Docente Avaliador',1);