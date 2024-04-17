---
title: Importar Procedimentos Legados
tags:
  - caixaDeProcedimentos
draft: false
review:
---
Localizado no **canto superior direito** da [[Barra de Ações do Sistema|barra de ações do sistema]], é por meio desse botão que um procedimento já tramitando [[Físicos X Eletrônicos#Procedimentos Físicos|fisicamente]] passara a tramitar de maneira eletrônica no Integra Extrajudicial.

> [!tip] Dica
> **Veja em seguida:**
>  1. [[Editar Rascunhos e Incluir Documentos|Editar Rascunhos e Incluir Documentos]]  
>  2. [[Autuação e Instauração de Rascunhos|Autuação e Instauração de Rascunhos]]

## Importação

Ao clicar no botão "Importar", será solicitado ao usuário que informe o n. MPRJ (n. MGP) do procedimento, sendo este o **primeiro requisito da importação**.

![[importação.png]]*Tela de importação*

Confirme a importação clicando em IMPORTAR PROCEDIMENTO.

Caso os demais [[Requisitos para Importação|requisitos para importação]] estejam satisfeitos, o usuário será levado para dentro do procedimento, onde deverá incluir documentos e editar os dados básicos do procedimento, se necessário.

Os cards de procedimentos legados conterão um ícone que os diferencia dos demais.

![[card - rascunho legado.png]]*Ícone de procedimento legado*
## Informações Importadas

Algumas informações serão trazidas do MGP nesse momento. São elas:
1. Número MPRJ/MGP
2. [[Atribuições Ativas|Atribuição]]
3. [[Tipos de Procedimentos|Tipo de Procedimento]]
4. [[Decretar Levantar Sigilo|Nível de Sigilo]]
5. Descrição do Fato
6. Assuntos
7. [[Personagens|Personagens]]

>[!attention] Atenção
> Algumas dessas informações não serão editáveis nesse momento. 
> 
> Para alterá-las o rascunho deverá ser excluído e tais informações modificadas via complementação de dados no MGP. 
> 
> São elas:
> 1. Atribuição
> 2. Classe do Procedimento Administrativo

> [!info] Informação
> **Nenhuma peça** contida em [[Sharepoint, OneDrive e outros repositórios de arquivos|outros repositórios]] ou  no MGP **será importada** para o procedimento!
> 
> *Caso a árvore do procedimento já contenha algum documento*, trata-se de um caso de [[Reimportação de Procedimentos|reimportação de procedimento]].


## Termo Final de Conclusão

Além do que normalmente deve ser obrigatoriamente preenchido, como o Objeto/Ementa - que nos procedimento legado sempre estarão em branco -, deve ser informado o prazo do procedimento, de acordo com a data de sua instauração/autuação ou última [[Prorrogar Procedimento|Prorrogação]].

Para isso, clique no campo correspondente e selecione uma data ou digite.

![[impotação - termo final de conclusão.png]]*Data do termo final de conclusão*


## Personagens

Uma peculiaridade na importação de personagens é que eles podem não corresponder às classificações do sistema, como Noticiante, Noticiado, Investigado, etc.

Dessa forma, pode ser necessário classificá-los no momento da importação.

![[importação - classificação de personagens.gif]]<p style="font-size: 1.2em;">↗️ <em style="font-size: small;">Passe o mouse para ampliar</em></p>

> [!info] Informação
> Poderão ser excluídos os personagem trazidos na importação, editados e até mesmo incluídos outros.

> [!tip] Dica
> Mesmo que um personagem venha corretamente classificado e contenha CPF/CNPJ, convém realizar a busca deste personagem na Base da Receita Federal e incluí-lo (excluindo o personagem importado), a fim de que conste, nas nossas bases de dados, um personagem certificado.

## Apensos

Não é possível importar procedimentos que contenham apensos no MGP, sendo *necessário que o vínculo seja desfeito.*

Para mais informações sobre apensos, [[Procedimentos Apensos|clique aqui]].

## Outros Vínculos no MGP

Demais vínculos no MGP, como anexo e juntada, não necessitam ser alterados. Entretanto, o Sistema não trará nenhum informação a respeito desses vínculos.

>[!attention] Atenção
>Ficará sob responsabilidade dos usuários incluir os PDFs correspondentes aos documentos vinculados no MGP, como é o caso de Expedientes Administrativos juntados ao procedimentos, Notícias de Fato e demais anexos.

## Mídias

Por ora, na inclusão de documentos na árvore de procedimento importados, apenas são aceitos arquivos no formato PDF.

>[!attention] Atenção
>Caso queira incluir mídias nos [[Tipos de Arquivos Suportados|formatos já suportados]] pelo sistema, tal inclusão poderá ser feita após a confirmação da importação ou, *alternativamente*, como descrito [[Inclusão de Arquivos Não Suportados|aqui]].


## Erros comuns

<em style="color:red"> "Fiz a importação e agora meu procedimento sumiu!"</em>

Quando o usuário realizar a importação, pode acontecer de voltar à Caixa de Procedimento na situação "em andamento" e não encontrar o procedimento, achando que todo o processo de importação não terminado foi descartado.

Então, ele tenta realizar a importação novamente e recebe a seguinte mensagem:

![[importação - número já existe no Extra.png]]*Erro: número já existe*

Para localizar o rascunho do procedimento importado, acesse o [[Painel de Filtros|Painel de Filtros]], selecione a situação "Rascunho" e clique em BUSCAR.

O procedimento "sumido" deverá estar entre os cards exibidos.

## Como fazer

![[importação - como fazer.mp4]]
