# Curso JavaScript Completo ES6

Repositório de estudo do curso JavaScript Completo ES6 da Origamid. Aqui estão reunidos exercícios práticos organizados por módulos, além de documentações e diagramas criados para facilitar a revisão dos conceitos.

## Conteúdo do repositório

| Área | Diretório | Conceitos |
|---|---|---|
| Fundamentos | [`src/JS Para Iniciantes/`](./src/JS%20Para%20Iniciantes/) | variáveis, operadores, condicionais, funções, objetos, arrays e escopo |
| DOM | [`src/DOM Para Iniciantes/`](./src/DOM%20Para%20Iniciantes/) | seleção, eventos, classes, travessia, tabs, accordion e scroll |
| Objetos | [`src/Objetos/`](./src/Objetos/) | constructor, prototype, native objects, String, Array, Function e Object |
| Efeitos no DOM | [`src/Efeitos no DOM/`](./src/Efeitos%20no%20DOM/) | primeiro exercício de dados customizados com `dataset` |
| Tabela verdade | [`src/Tabela Verdade/`](./src/Tabela%20Verdade/) | operadores booleanos `&&`, `||` e `!` |

## Documentação criada

- [Fundamentos de JavaScript](./Doc/Fundamentos/fundamentos.md)
- [Conceitos de JavaScript no Navegador](./Doc/Conceitos/conceitos.md)

Os documentos incluem tabelas, exemplos de código e estes diagramas ilustrativos:

- [Fluxo dos fundamentos](./Doc/img/fundamentos-fluxo.svg)
- [Fluxo DOM e eventos](./Doc/img/dom-eventos.svg)
- [Constructor, prototype e instância](./Doc/img/objetos-prototype.svg)

## Estrutura

```text
.
|-- README.md
|-- Doc/
|   |-- Fundamentos/
|   |   `-- fundamentos.md
|   |-- Conceitos/
|   |   `-- conceitos.md
|   `-- img/
|       |-- fundamentos-fluxo.svg
|       |-- dom-eventos.svg
|       `-- objetos-prototype.svg
`-- src/
    |-- JS Para Iniciantes/
    |-- DOM Para Iniciantes/
    |-- Objetos/
    |-- Efeitos no DOM/
    `-- Tabela Verdade/
```

## Como estudar

1. Abra o arquivo HTML relacionado ao módulo desejado.
2. Verifique o caminho do script JavaScript carregado pela página.
3. Abra o DevTools do navegador com `F12`.
4. Observe os resultados na aba Console e manipule os elementos nas abas Elements e Sources.

Os exercícios são independentes e vários arquivos usam `console.log`, `prompt`, eventos ou classes presentes em HTML específico.

## Progresso previsto

- [x] JavaScript para iniciantes
- [x] DOM para iniciantes
- [x] Objetos
- [x] Operadores booleanos
- [ ] Efeitos no DOM: apenas a aula inicial está presente

## Observações técnicas

Este repositório é didático e apresenta diferentes versões de conceitos conforme o andamento das aulas. Alguns arquivos contêm exemplos históricos ou erros deliberados de verificação, como atribuições a `const` ou chamadas a APIs ainda não carregadas. Antes de reutilizar os trechos em outro projeto, revise-os e adapte nomes, HTML e caminhos.