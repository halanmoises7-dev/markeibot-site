# AgendaBot - Landing Page

> Transforme seu WhatsApp em uma secretária inteligente que trabalha 24h por dia.

O **AgendaBot** é um Micro-SaaS focado em automação de agendamentos para pequenos e médios negócios. Esta landing page foi desenvolvida para apresentar o produto, converter leads e facilitar o contato direto via WhatsApp.

---

## Funcionalidades

- **Design Modular**: Componentes isolados para facilitar a manutenção e escalabilidade.
- **Navegação Inteligente**: Menu responsivo (Hambúrguer) para dispositivos móveis.
- **Conversão Direta**: Formulário de contato que gera mensagens pré-estruturadas para o WhatsApp.
- **Tabela de Preços**: Seção dedicada para exibição de planos e gatilhos de venda.
- **Performance**: Construído com Vite para um carregamento ultra-rápido.

---

## Tecnologias e Ferramentas

- **[React](https://reactjs.org/)** - Biblioteca principal.
- **[Vite](https://vitejs.dev/)** - Build tool de próxima geração.
- **[React Router Dom](https://reactrouter.com/)** - Gerenciamento de rotas.
- **[Docker & Docker Compose](https://www.docker.com/)** - Containerização para deploy e portabilidade.
- **[Nginx](https://www.nginx.com/)** - Servidor web de alta performance para os arquivos estáticos.
- **[CSS Modules/BEM Style]** - Estilização organizada e separada por componente.
- **[CSS Modules/BEM Style]** - Estilização organizada e separada por componente.
- **[Lucide React / Icons]** - Iconografia moderna (se aplicável).

---

## Estrutura de Pastas

O projeto segue o padrão de **Component-Based Architecture**:

```text
agendabot-site/
 ├── src/
 │    ├── assets/            # Imagens, ícones e logotipos
 │    ├── components/        # Componentes reutilizáveis
 │    │    ├── Header/       # Menu e Logo
 │    │    ├── Main/         # Hero Section (Início)
 │    │    ├── About/        # Seção sobre o robô
 │    │    ├── Cards/        # Funcionalidades e diferenciais
 │    │    ├── Pricing/      # Tabela de planos
 │    │    ├── Contact/      # Formulário de lead para WhatsApp
 │    │    └── Footer/       # Rodapé e links legais
 │    ├── App.jsx            # Orquestrador de componentes e rotas
 │    └── index.css          # Estilos globais e variáveis de cor
 ├── docker-compose.yml      # Configuração dos serviços Docker
 ├── Dockerfile              # Instruções de build da imagem
 └── .dockerignore           # Arquivos ignorados pelo Docker
 ```

---

## Desenvolvedor
Halan Moisés - Mídia & Web

Profissional Multi-hyphenate: Designer, Web Dev e Fotógrafo.

Rio de Janeiro, Brasil.

---

## Licença
Este projeto é de uso exclusivo para o Micro-SaaS AgendaBot.

Copyright © 2026 Halan Moisés.