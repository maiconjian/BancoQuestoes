create table UNIDADE_ADM (
   ID                   int                  identity,
   NOME                 varchar(50)          not null,
   UF                   varchar(2)           not null,
   CIDADE               varchar(20)          not null,
   ATIVO                smallint             not null,
   constraint PK_UNIDADE primary key nonclustered (ID)
)
go

insert into UNIDADE_ADM(NOME,UF,CIDADE,ATIVO)VALUES('SENAI FLORIANOPOLIS (CTAI)','SC','FLORIANOPOLIS',1);
insert into UNIDADE_ADM(NOME,UF,CIDADE,ATIVO)VALUES('SENAI SAO JOSE','SC','SAO JOSE',1);