create table PERFIL (
   ID                   int                  identity,
   NOME                 varchar(20)          not null,
   constraint PK_PERFIL primary key nonclustered (ID)
)
go

Insert into PERFIL(NOME)VALUES('Administrador');
Insert into PERFIL(NOME)VALUES('Docente');
Insert into PERFIL(NOME)VALUES('Docente Avaliador');