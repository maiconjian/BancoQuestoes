create table ALTERNATIVA (
   ID                   int                  identity,
   DESCRICAO            text                 not null,
   CORRETA              tinyint              not null,
   constraint PK_ALTERNATIVA primary key (ID)
)
go