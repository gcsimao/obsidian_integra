---
title: Bloqueio no MGP
tags:
  - integracaoMGP
draft: false
review:
---
Quando um procedimento está tramitando de maneire eletrônica por meio do Integra Extrajudicial, mesmo que em forma de rascunho[^1], alguns bloqueios são realizados no MGP.

## Complementação de Dados

Na complementação de dados **não será possível modificar**:
- Informações básicas
	- Atribuição
	- Número da Portaria
	- Classe
	- Assunto
	- Nível de Sigilo
	- Órgão Responsável
- Fato e Ocorrências
	- Descrição do Fato
- Personagens
	- Inclusão e exclusão
- Vincular documentos
	- Exclusão de vínculos cuja procedência seja "Integra Extrajudicial"[^2]
	- Inclusão de vínculos entre procedimentos físicos e eletrônicos dos tipos:
		- "JUNTADA"
		- "APENSO"
		- "ANEXO"

## Movimentos de Membro

**Não será possível,** ainda, registrar os movimentos de membro cuja integração já esteja sendo realizada pelo sistema.[^3] A listagem completa dos movimentos pode ser conferida [[Tabela de Integração com o MGP|aqui]].

Apenas movimentos não integrados podem ser registrados manualmente.

> [!info] Informação
> Ao registrar um movimento ainda não integrado pelo MGP, deve-se lançar um [[Despacho não integrado|Despacho não integrado]] no Integra Extrajudicial.


[^1]: Como no caso de importações de procedimentos legados
[^2]: Ver [[Anexar Notícia de Fato|Anexar Notícia de Fato]] e [[Vincular Procedimentos|Vincular Procedimentos]] 
[^3]: Ainda é possível a tramitação por guia de remessa bem como abertura/cancelamento de vista manual, mas isso pode causar inconsistência entre os sistemas