create table UNIDADE
(
   ID                   int not null auto_increment,
   NOME                 varchar(100) not null,
   UF                   varchar(2) not null,
   CIDADE               varchar(20) not null,
   primary key (ID)
);

insert into UNIDADE(NOME,UF,CIDADE)VALUES('SENAI FLORIANOPOLIS (CTAI)','SC','FLORIANOPOLIS');
insert into UNIDADE(NOME,UF,CIDADE)VALUES('SENAI SAO JOSE','SC','SAO JOSE');