create table UNIDADE (
   ID                   int                  identity,
   NOME                 varchar(50)          not null,
   UF                   varchar(2)           not null,
   CIDADE               varchar(20)          not null,
   constraint PK_UNIDADE primary key nonclustered (ID)
)
go

insert into UNIDADE(NOME,UF,CIDADE)VALUES('SENAI FLORIANOPOLIS (CTAI)','SC','FLORIANOPOLIS');
insert into UNIDADE(NOME,UF,CIDADE)VALUES('SENAI SAO JOSE','SC','SAO JOSE');