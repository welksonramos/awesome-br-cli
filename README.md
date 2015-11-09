# Awesome-br-cli
> CLI para registrar novas postagem em [awesome-br](https://github.com/awesome-br)

## Instalação

```bash
$ npm install -g awesome-br-cli

```

## Uso

Rode o seguinte comando no terminal:

```bash
awesome-br <section>

Ex: awesome-br nodejs
```

## Questões

**Título:** Título da URL
> Exemplo: 

**URL**:
> Exemplo: 

**Tipo:** Escolhe o tipo de link
> Opções: artigo, código, dica, livro, screencast, vídeo, tutorial, url

**Tags:** Tags (separadas por commas).
> Exemplo: dica, documentação, api, referência, livro,

**Nome do Autor**
> Exemplo: John Doe

**URL do Site do Autor**
> Exemplo: http://example.com

### Resultado
```bash
{
    "name": "Título do link",
    "url": "Url do link",
    "type": "Tipo",
    "tags": [
      "tags",
      "tags"
    ],
    "author": {
      "name": "Nome do autor",
      "url": "Url do site do autor"
    }
  }
```
***Inspirado em _[freetime-cli](https://github.com/free-time/freetime-cli)_***

## License

&copy; [MIT](LICENSE) License
