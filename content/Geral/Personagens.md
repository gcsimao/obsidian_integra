---
title: Personagens
tags: 
draft: false
review:
---
O cadastro de personagens é feito durante a [[Criar Procedimento|criação de procedimentos]], [[Importar Procedimentos Legados|importação]], [[Editar Dados da NF|edição de NFs]] e confecção de [[Portarias de Instauração|portarias]].

Também são utilizados na expedição de [[Expedir Ofício e Notificação|ofício e notíficações]] e [[Expedir Recemendação|recomendações]].

> [!info] Informação
> Os personagens são [[Integração com o MGP|integrados ao MGP]], alterando os dados dos procedimentos.

Vejamos os tipos em detalhes:
## Externo

São personagens externos à estrutura do MPRJ, podendo variar entre **pessoa física e jurídica**. 

Realizada a busca, basta clicar na listagem exibida para selecionar.

**É possível selecionar mais de um personagem**, <u> combinando entre pessoas físicas e jurídicas e  personagens internos</u>.

### Base de Dados da Receita Federal

O MPRJ, por meio de um convênio com  a RFB, obteve uma base de dados de pessoas físicas e jurídicas[^1] que proporcionou uma enorme melhoria nesse aspecto, diminuindo em muito a incidência de cadastros incompletos e homônimos.

Ao selecionar um personagem "Externo", é possível optar por "Pessoa Física" e "Pessoa Jurídica".

Há a possibilidade de busca pelo nome ou CPF para pessoa física; e nome, nome fantasia ou CNPJ para pessoa jurídica.

![[Personagens - Externo.gif]]<p style="font-size: 1.2em;">↗️ <em style="font-size: small;">Passe o mouse para ampliar</em></p>

### NÃO CERTIFICADO

Há ainda uma terceira opção, que é o **personagem não certificado**, que é utilizado quando a busca não retorna resultados satisfatórios.
>[!danger] Cuidado
>O personagem NÃO CERTIFICADO deve ser **evitado ao máximo** para que a base de dados institucional não fique poluída com diversos homônimos e personagens inconsistentes, tal como ocorria no [[MGP/index|MGP]]

Ao clicar em NÃO CERTIFICADO, o usuário deve **obrigatoriamente** preencher um **nome** e, <u> opcionalmente</u>, cadastrar um <u>CPF ou CNPJ válido</u>.

![[Personagens - Não Certificado.gif]]<p style="font-size: 1.2em;">↗️ <em style="font-size: small;">Passe o mouse para ampliar</em></p>
#### Preencher Manualmente

Nos ofícios, notificações e recomendações, veremos que haverá um botão chamado PREENCHER MANUALMENTE, cujo comportamento é muito parecido com o NÃO CERTIFICADO.

Porém, como os **dados ali preenchidos não serão integrados nos dados básicos do procedimento**[^2], seu uso é menos restrito, não trazendo prejuízo para as bases de dados.


![[Personagens - Preencher Manualmente.png]]*Botão preencher Manualmente'*
## Interno

Destinado a órgãos da estrutura do MPRJ.

Pode-se realizar a busca tanto pelo nome do órgão quanto pelo seu código e é **permitida múltipla seleção**.

![[Personagens - Interno.gif]]<p style="font-size: 1.2em;">↗️ <em style="font-size: small;">Passe o mouse para ampliar</em></p>

## Anônimo

Personagens anônimos **só podem ser** cadastrados como **noticiantes**.

Ao selecionar "Anônimo", **não é permitido selecionar outros personagens** como noticiante.
## De ofício

Também **permitidos apenas como noticiantes**, automaticamente insere como *noticiante o órgão de atuação em que o usuário está logado*.

**Não permite seleção múltipla** com outro tipo de personagem.
## Ignorado

Funcionamento similar ao "Anônimo", porém é utilizado para cadastrar um noticiado/investigado/tutelado.

Igualmente, **não permite seleção múltipla **com outros tipos de personagens

## Noticiado, Investigado e Tutelado

A regra geral é que em Notícias de Fato, sempre seja exibido o campo como Noticiado.

Para outros tipos de procedimento, a depender da atribuição, será exibido como "Investigado" ou "Tutelado".

A grande maioria das atribuições exibirá o campo como "Investigado"

Atribuições que tutelam direito individuais geralmente exibirão o termo "Tutelado", como no caso das atribuições "Cível", "Família e "Tutela Individual da Pessoa com Deficiência", por exemplo.

>[!attention] Atenção
> Ao criar uma Notícia de Fato de uma das atribuições em que o investigado se torna tutelado, tenha em mente que, ao instaurar um procedimento formal a partir dessa NF, o noticiado se tornará tutelado.

[^1]: A base de dados fornecida não possui os registro mais atuais da RFB, mas o MPRJ vêm trabalhando nesse sentido para mantermos a base o mais atualizada possível.
[^2]: Na integração dos personagens de ofícios, notificações e recomendações, o personagem preenchidos apenas comporá o campo "Destinatário" do movimento correspondente.