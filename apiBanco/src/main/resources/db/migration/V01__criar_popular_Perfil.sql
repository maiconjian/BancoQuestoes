create table PERFIL
(
   ID                   int not null auto_increment,
   NOME                 varchar(20) not null,
   primary key (ID)
);


Insert into PERFIL(NOME)VALUES('Administrador');
Insert into PERFIL(NOME)VALUES('Docente');
Insert into PERFIL(NOME)VALUES('Docente Avaliador');