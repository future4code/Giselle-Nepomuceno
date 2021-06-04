CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


/* Exercicio 1

a) Varchar ( 255) - atribui valor de string onde o 255 é a quantidade de caracteres permitidos
Primary key é uma chave unica
Date atribui o valor de data YYYYMMDD
Not null representa que ao atribuir o valor ele nao é null

b) O show database da a informaçao do banco de dados nome e information schemma
O show table mostra SHOW TABLE mostra as tabelas existentes no banco de dados.

c) O describe vai lhe fornecer todos os valores que precisam ser inseridos na tabela, se a informaçao 
é null se existe uma key, e qual é e quais sao os campos da tabela.*/

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- Exercicio 2
-- a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-3", 
  "female"
);
-- *b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Robert Deniro",
  2200000,
  "1943-08-17", 
  "male"
);
-- Error code 1062. Entrada 002 da key primária duplicada. Ele nao deixa sobrescrever pois a chave ( key primary ) é unica.

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- erro codigo 1136. A coluna não combina com os valores. Está sendo passado apenas salario id e name porem os valores nao combinam com alinha do insert

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- erro codigo 1364.  o campo name não possui valor. ( não foi passado o valor para o campo name no insert into)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- erro codigo 1292. o valor da data esta incorreto. ( nao foi passa entre aspas como é exigido pelo date)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
SELECT * FROM Actor;

SELECT id, salary from Actor ;

SELECT id, name from Actor WHERE gender = "male";

-- a. Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

-- b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`

SELECT  salary from Actor WHERE name= "Tony Ramos";

-- c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT  * from Actor WHERE gender="invalid";

-- deu null porque nao há nenhum usuario com genero invalido.

-- d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary FROM Actor where salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";

-- Foi escrito nome em vez de name, o correto seria name.

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
 
 -- selecione todas as infos da table actor aonde o nome é igual a A ou o nome é igual a J. e o salario seja maior que 300000.
 
 -- b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000;

-- C. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor
WHERE name LIKE "%G%" OR  "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR  "%g%" OR "%A%" OR  "%a%") AND   salary BETWEEN 350000 AND 900000 ;

-- EXERCICIO 5

CREATE TABLE Filmes (
 id VARCHAR(255) PRIMARY KEY,
 nome VARCHAR (255) NOT NULL, 
 sinopse TEXT NOT NULL, 
 data_de_lançamento DATE NOT NULL,
 avaliação INT NOT NULL
);

INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Raya",
  "Raya, rastrear o lendário último dragão para restaurar a terra despedaçada e seu povo dividido.",
  "2021-03-04", 
  10
);

INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

SELECT * FROM Filmes;
SELECT id, nome, avaliação from Filmes WHERE id = "001";

SELECT * from Filmes WHERE nome = "Raya";
SELECT id, nome, sinopse from Filmes WHERE avaliação >= 7;

SELECT * from Filmes WHERE nome LIKE "%vida%" or "%Vida%";

SELECT * from Filmes WHERE nome  LIKE "%você%" or "%Você%" AND sinopse  LIKE "%você%" or "%Você%";

SELECT * FROM Filmes WHERE data_de_lançamento <= "2021-05-24";

SELECT * FROM Filmes WHERE data_de_lançamento <= "2021-05-24" AND nome  LIKE "%você%" or "%Você%" AND sinopse  LIKE "%você%" or "%Você%" AND avaliação > 7  ;