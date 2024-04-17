---
title: Requisitos para Importação
tags: 
draft: false
review:
---
Para que um procedimento possa ser importado para o Sistema, primeiramente ele deve possuir um **Número MPRJ/MGP** e devem estar satisfeitas algumas condições em relação aos seus dados. Vejamos:

![[Importação - alertas.png]]*Exemplos de alertas na importação*

## Tipo de Procedimento

Deve ser de ums dos [[Tipos de Procedimentos|tipos de procedimentos aceitos no Sistema]].

> [!info] Informação
> Expedientes de Ouvidoria só poderão ser importados para o sistema após a devida autuação no MGP como Notícia de Fato.

## Carga e Órgão Responsável

- O procedimento deve estar com **carga no órgão de apoio**, ou seja, na Secretaria.
- O Órgão Responsável deve ser o órgão de execução, não sendo aceitos procedimentos com órgão responsável como sendo a Secretaria, por exemplo.

## Estado e Fase do Documento

* O documento no MGP (procedimento) deve estar com estado "Disponível para envio"
* Sua fase deve ser "Em andamento"

## Classe, Atribuição e Assunto

- O procedimento deve conter uma classe (*ex. 910002 - Notícia de Fato*) e deve ser compatível com as atribuições do órgão
- O procedimento deve ser de uma das atribuições compatíveis com as atribuições do órgão
- Deve possuir ao menos um assunto válido[^1]

## Vínculos

- Para ser importado, o procedimento não pode ser secundário a outro
- Sendo o principal, não poderá conter [[Procedimentos Apensos|Procedimentos Apensos]]

![[MGP - Vincular documentos.png]]*Vinculação de Documentos no MGP*

## Saneamento das Pendências

A fim de conseguir realizar a importação, as pendências devem ser sanadas via complementação de dados no MGP - Informações Básicas e Vinculação de Documentos - antes de comandada a [[Importar Procedimentos Legados|importação]] no Integra Extrajudicial.

Pode ser necessário, ainda, realizar a tramitação do procedimento, por guias de remessa.

>[!attention] Atenção
>Em alguns casos, será necessário registrar um movimento, com é o caso de procedimentos que estejam com a Fase do Documento "Finalizado".
>
>Nesse caso, o movimento a ser registrado, com a matrícula do servidor, é o *1000228 – Reativação da fase do documento*.

![[MGP - Complementação de dados.png]]*Complementar dados no MGP*
![[MGP - Complementar dados 1.png]]*Carga, Tipo, Estado, Fase, Responsável e Atribuição*

![[MGP - Complementar dados 2.png]]*Classe e assunto*

[^1]: Ao longo do tempo, alguns assuntos da tabela taxonômica foram inativados