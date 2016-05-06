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
> Exemplo: Começando com React

**URL**:
> Exemplo: http://exemplo.com

**Tipo:** Escolhe o tipo de link (artigo, código, dica, livro, screencast, vídeo, tutorial, url, etc)
> Exemplo: Artigo

**Tags:** Tags (separadas por vírgulas).
> Exemplo: tutorial, introdução, javascript

**Nome do Autor**
> Exemplo: John Doe

**URL do Site do Autor**
> Exemplo: http://exemplo.com

### Resultado
```bash
{
    "name": "Começando com React",
    "url": "http://exemplo.com",
    "type": "Artigo",
    "tags": [
      "tutorial",
      "introdução",
      "javascript"
    ],
    "author": {
      "name": "John Doe",
      "url": "http://exemplo.com"
    }
  }
```
***Inspirado em _[freetime-cli](https://github.com/free-time/freetime-cli)_***

## License

&copy; [MIT](LICENSE) License
