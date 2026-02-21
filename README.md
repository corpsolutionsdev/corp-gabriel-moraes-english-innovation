# 🌐 English Innovation

> **Landing page** moderna e responsiva para **Gabriel Moraes - English Innovation**.  
> Site institucional com foco em conversão, SEO e experiência do usuário.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

---

## ✨ Sobre o projeto

Landing page single-page para divulgação dos cursos de inglês da **English Innovation**, com seções de:

- **Hero** — chamada principal e CTAs
- **Como Funciona** — metodologia e diferenciais
- **Nossos Cursos** — ofertas e bônus
- **Depoimentos** — avaliações de alunos
- **Sobre Mim** — perfil do professor
- **Contato** — WhatsApp e agendamento de aula experimental

O site utiliza **canonical URL**, **manifest.json**, **robots.txt** e **sitemap.xml** para SEO e PWA.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Layout, animações (pulse, AOS), responsividade |
| **JavaScript** | Menu mobile, inicialização AOS |
| **AOS** | Animações on scroll ([AOS](https://michalsnik.github.io/aos/)) |

---

## 📁 Estrutura do projeto

```
.
├── index.html          # Página principal
├── manifest.json       # PWA / install prompt
├── robots.txt          # Diretivas para crawlers
├── sitemap.xml         # Sitemap para SEO
├── README.md
└── src/
    ├── css/
    │   └── styles.css  # Estilos globais e componentes
    ├── js/
    │   └── main.js     # Scripts (menu, AOS)
    └── img/            # Imagens e assets
```

---

## 🔧 Como rodar localmente

1. **Clone o repositório** (se ainda não tiver):

   ```bash
   git clone <url-do-repositorio>
   cd corp-gabriel-moraes-english-innovation
   ```

2. **Sirva os arquivos** com um servidor local (evita problemas de CORS e manifest):

   ```bash
   # Com Python 3
   python -m http.server 8000

   # Ou com Node (npx)
   npx serve .
   ```

3. Acesse no navegador: **http://localhost:8000**

---

## 📄 Arquivos de SEO e PWA

| Arquivo | Descrição |
|---------|-----------|
| **manifest.json** | Nome, cores, ícones e configuração PWA (theme/background). |
| **robots.txt** | Permite todos os user-agents e aponta para o sitemap. |
| **sitemap.xml** | Lista as URLs do site (página inicial e âncoras) para indexação. |
| **Canonical** | No `<head>` do `index.html`: `https://englishinnovation.com.br` |

---

## 🌍 Produção

- **URL canônica:** [https://englishinnovation.com.br](https://englishinnovation.com.br)
- **Sitemap:** `https://englishinnovation.com.br/sitemap.xml`
- **Robots:** `https://englishinnovation.com.br/robots.txt`

Ao publicar, garanta que **manifest.json**, **robots.txt** e **sitemap.xml** estejam na raiz do domínio e acessíveis por URL absoluta.

---

## 👥 Créditos

- **Conteúdo / Negócio:** Gabriel Moraes - English Innovation  
- **Desenvolvimento:** [Corp IT Solutions](https://corpitsolutions.tec.br) · [VWTech Dev](https://vwtechdev.com.br)

---

## 📜 Licença

Projeto privado. Uso conforme acordado com o titular da marca English Innovation.
