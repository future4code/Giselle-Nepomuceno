CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
 
-- AULA 45
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
-- alterar uma tabela adicionando uma coluna nova
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
-- AULA 46 --

/* 1a - Provavelmente este apagaria a coluna salario da tabela.alter
1b -  transforma o gender em sex e ele se torna null pq não é declado o not null
2c - transforma o gender em  gender de um vachar com 255 caracteres e nulo, pois declara not null*/

ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL;
DESCRIBE Actor;

-- A query abaixo muda o nome do ator com id 123 para Moacyr Franco:
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

-- EXERCICIO 2
-- 2 a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003.

UPDATE Actor
SET  birth_date  = "1929-10-16"
WHERE id = "003";

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor
SET  name = "JULIANA PAES"
WHERE id = "005";

SELECT * FROM Actor;

UPDATE Actor
SET  name = "Juliana Paes"
WHERE id = "005";

-- c)  Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET  
	name =  "Moacyr Franco",
	birth_date = "1936-10-05",
    salary = 100000,
    gender = "male"
WHERE id = "005";

UPDATE Actor
SET  
	name =  "Demmi Lovato",
	birth_date = "1996-10-05",
    salary = 140000,
    gender = "female"
WHERE id = "014";
-- d) R: Ele atualiza sem dar erro porem por nmao existir nenhum id 014 nao aparece ja que ele faz apenas a atualização.


-- exercicio 3
-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-- b)
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


-- EXERCICIO 4
 -- Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:
 SELECT COUNT(*) FROM Actor;
 
 -- Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
 SELECT COUNT(*) FROM Actor WHERE gender = "female";
 
 -- Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores
 SELECT AVG(salary) FROM Actor;
 
 -- pra agrupar por genero
  -- a)  Escreva uma query que pegue o maior salário de todos os atores e atrizes
 SELECT AVG(salary), gender FROM Actor GROUP BY gender;
 
 -- Salario maximo pra fazer Minimo é so Usar MIN
 SELECT MAX(salary) FROM Actor WHERE gender = "male";
 SELECT MAX(salary) FROM Actor WHERE gender = "female";
-- b) Escreva uma query que pegue o maior salário de todos os atores e atrizes
  SELECT MIN(salary) FROM Actor WHERE gender = "male";
 SELECT MIN(salary) FROM Actor WHERE gender = "female";
 -- c)  Escreva uma query que pegue a quantidade de atrizes*
  SELECT COUNT(*) FROM Actor WHERE gender = "female";
 
 -- d) Escreva uma query que pegue a soma de todos os salários
  -- PRA fazer a soma de todos os salarios
   SELECT SUM(salary) FROM Actor;
   
   
   -- EXERCICIO 5

   -- O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:
   SELECT * FROM Actor LIMIT 3;
   
   -- ORDER BY permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (ASC) ou decrescente (DESC). A sintaxe é: ORDER BY coluna ASC/DESC. Se quisermos os atores em ordem alfabética:
  
  -- Vai retornar ordem crescente por nome
  SELECT * FROM Actor ORDER BY name ASC;
  -- ordem decrescente
 SELECT * FROM Actor ORDER BY name DESC;
 -- ordernar e com limite
 SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
 
-- a. Releia a última query. Teste-a. Explique o resultado com as suas palavras

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Ela da a contagem de atores por genero
-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
	SELECT id, name FROM Actor ORDER BY name DESC;
 -- c) Faça uma query que retorne todos os atores ordenados pelo salário
	SELECT * FROM Actor ORDER BY salary ASC;
--  d) Faça uma query que retorne os atores com os três maiores salarios
	SELECT * FROM Actor
	ORDER BY salary DESC
	LIMIT 3;
--  e ) Faça uma query que retorne os atores com os três maiores salarios
	SELECT AVG(SALARY), gender FROM Actor
	GROUP BY gender;


-- EXERCICIO 6
-- a)
ALTER TABLE Filmes ADD playing_limit_date DATE;
ALTER TABLE Filmes DROP playing_limit_date;
DESCRIBE Filmes;
-- b)
ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT;
-- c)
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Filmes
SET
	playing_limit_date = "2021-06-21"
WHERE id = "002";

-- d)
DELETE FROM Filmes WHERE id = "004";

UPDATE Filmes
SET
	sinopse = "A vida é bela blablabla"
WHERE id = "007";

-- Não ocorre erro, ele atualiza apesar de nao ter o filme


-- EXERCICIO 7
-- a)
SELECT COUNT(*) FROM Filmes WHERE avaliação > 7.5;
SELECT * FROM Filmes;
-- b)
SELECT AVG(avaliação) FROM Filmes;
-- c)
SELECT COUNT(playing_limit_date) FROM Filmes WHERE playing_limit_date < "2021-05-25";
-- d)
SELECT COUNT(playing_limit_date) FROM Filmes WHERE playing_limit_date > "2021-05-25";
-- e)
SELECT MAX(avaliação) FROM Filmes;
-- f)
SELECT MIN(avaliação) FROM Filmes;


-- EXERCICIO 8
-- a)
SELECT * FROM Filmes ORDER BY nome ASC;
-- b)
 SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;
-- c)

SELECT * FROM Filmes WHERE playing_limit_date < "2021-05-25" LIMIT 5;
-- d) 
SELECT * FROM Filmes ORDER BY avaliação DESC LIMIT 3;