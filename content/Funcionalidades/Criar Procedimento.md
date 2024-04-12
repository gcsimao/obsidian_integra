---
title: Criar Procedimento
tags:
  - caixaDeProcedimentos
draft: false
review:
---
Localizado no **canto superior direito** da [[Barra de Ações do Sistema|barra de ações do sistema]], é por meio desse botão que é criado um [[Legados X Nato Digitais#Nato Digitais|procedimento nato digital]] no Integra Extrajudicial.

> [!tip] Dica
> **Veja em seguida:**
>  1. [[Editar Rascunhos e Incluir Documentos|Editar Rascunhos e Incluir Documentos]]  
>  2. [[Autuação e Instauração de Rascunhos|Autuação e Instauração de Rascunhos]]
## Dados Básicos do Procedimento

Ao clicar no botão, a seguinte tela será exibida para preenchimento dos dados básicos do sistema.
>[!attention] Atenção
> - Campos marcados com (\*) são de preenchimento obrigatório.
> - Após [[#Salvando o Rascunho|salvar]] os dados, ainda será possível editar os dados, até o momento da confirmação da autação/instauraçãodo procedimento. 
> - Nenhuma informação é integrada ao MGP nesse primeiro momento.

![[Cria procedimento - início.png]]*Tela de criação de procedimentos*

> [!info] Informação
> Uma vez criado o procedimento, o usuário pode deixar a tela de procedimento e retornar ao rascunho a qualquer momento.

Veremos agora cada campo separadamente (caso queira pular essa etapa, veja [[#Como fazer|aqui ]] como fazer).

### Atribuição

Comece a digitar para que sejam exibidas as [[Atribuições Ativas|atribuições]] cadastradas para o órgão de atuação e selecione.

Altere clicando no "X" ao lado da atribuição selecionada ou simplesmente digite novamente para pesquisar.

> [!tip] Dica
> Caso queira exibir quais são as atribuições do órgão, digite a letra "a" que será suficiente para encontrar quase todas as atribuições, *exceto Júri, Cível e Registro Públicos*.

### Tipo de Procedimento

Após selecionar a atribuição, os [[Tipos de Procedimentos|tipos de procedimentos]] disponíveis para aquela atribuição também serão exibidos para seleção.

>[!attention] Atenção
>Para o Procedimento Administrativo, também é necessário selecionar sua classe, cujas opções disponíveis também serão exibidas ao clicar em "PA"

Clique sobre o tipo desejado para prosseguir.

>[!example] Exemplo
>Ao selecionar uma atribuição de tutela coletiva, serão exibidos os tipos IC, NF, PP e PA, sendo que para este último, ainda serão exibidas as classes disponíveis.
> ![[Cria procedimento - atribuição.png]]

### Objeto/Ementa e Descrição do Fato

Agora é necessário o preenchimento do Objeto/Ementa[^1], quando cabível, bem como a Descrição do Fato. Ambos são limitados a 1000 e  2000 caracteres respectivamente.

### Assuntos

Neste campo é possível pesquisar os assuntos das tabelas taxonômicas de assuntos do MPRJ. Basta começar a digitação, seja por texto ou por código, que uma lista para seleção será exibida.

É possível selecionar mais de um assunto para o mesmo procedimentos, bem como excluir um assunto selecionado.

![[Cria procedimento - assunto.png]]*Pesquisa de assuntos*

### Personagens

Serão dois campos de personagens que deverão ser preenchidos:
1. **Noticiante** - podendo ser:
	- Externo
	- Interno
	- Anônimo
	- De ofício
2. **Noticiado / Investigado / Tutelado**[^2]
	- Externo
	- Interno
	- Ignorado

Via de regra, são campos de pesquisa textual que **permitem múltipla seleção**.

A **exceção** fica por conta dos <u>personagens do tipo "Anônimo", "De ofício" e "Ignorado"</u>, que uma vez selecionados **não permitem a inclusão de outros**.

> [!info] Informação
> Para saber mais detalhes sobre os personagens, [[Personagens|clique aqui]]

> [!tip] Dica
> Não utilize acentos e caracteres especiais nas pesquisas por nome.

### Campos Não Obrigatórios

Por fim, há os campos opcionais de [[Etiquetas|Etiquetas]] e [[Texto do Cartão|Texto do Cartão]].

> [!info] Informação
> Estes campos **não são parte formal do procedimento,** *podem ser alterados a qualquer tempo* e não comporão nenhum documento dos autos.

#### Etiquetas

Realize uma pesquisa textual (*mínimo de 4 caracteres*) para escolher uma etiqueta já criada **ou inclua uma nova**.

#### Texto do Cartão

Campo de texto livre, *limitado a 50 caracteres* e se propõe à rápida identificação no [[Card do Procedimento|Card do Procedimento]].

## Salvando o Rascunho

Após preenchidos todos os dados básicos, clique em SALVAR ao final da tela.

Neste momento, o usuário será direcionado para dentro do [[O Procedimento|procedimento]], que ainda estará sobre a forma de [[Rascunhos|rascunho]].

Para concluir a autuação/instauração, será necessária a inclusão de documentos para compor a [[Árvore de Documentos|árvore do procedimento]].


## Como fazer

![[Criar procedimento - início.mp4]]

[^1]: O campo Ementa/Objeto só será exibido para os procedimentos formais, não sendo exibido para NF
[^2]: A depender do tipo de procedimento e atribuição, o personagem poderá variar entre Noticiado, Investigado e Tutelado. Mais detalhes podem ser vistos  [[Personagens#Noticiado, Investigado e Tutelado|aqui]]