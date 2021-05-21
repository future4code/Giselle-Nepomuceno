/* Exercicio4 
a)Como você faria, já com a extensão instalada, 
para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

 R: Primeiro eu iria pro terminal e digitaria : tsc --init para criar uma pasta tsconfig. 
 Em seguida eu faria um npm start com o package json já configurado como :
 tsc && node ./build/index.js.
 
b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
   R: os dados acima foram citados para pagina src se nao apenas
  substuir a parte de ./build/index.js por index.js ( no caso se n estar na pasta src.)
c) Existe alguma maneira de transpilar 
múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

 R: Se eu digitar tsc todos os arquivos serao pegos uma vez que eu configurar o meu tsconfig output.

d) Compare esse arquivo com o que criamos durante a aula 
(ele está disponível na área de configuração do projeto ali em cima). 
Leia as descrições sobre cada uma das propriedades. Alguma 
configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?
 Eu fiz conforme feito em aula, nao tive surpresas uma vez que basicamente estao todos parecidos.

*/
