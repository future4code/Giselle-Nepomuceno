## Resposta 1

-- 1a ) Sim uma vez que as chaves vem com numeros e letras o uso de letrasja nao pode ser considerada number, a melhor forma é usar como string.
-- 2. b) o createUser é uma função que contem tres parametros no qual todos sao string: id, email e password. uma vez que conectados ele ira insertir o usuário passado por id, email e password na tabela criada acima chamada userTableName. que contem um usuário. O connecton vai pegar as informações no banco de dados ele quem vai puxar ou enviar as informações.

3 b)Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
