

# IFPB - Curso Superior de Tecnologias em Sistemas para Internet

## Disciplina: Interação Humano Computador

## Professor: Francisco Petronio Alencar de Medeiros

### Atividade sobre Elementos de Interfaces do Usuário, Frameworks de Frontend e UI Design Patterns

### Equipe (Nomes + Matrícula)

- Maria Laura Guedes de Farias - 202423700015
- Vinícius Ares Monteiro de Lima - 20242370007
- Luis Eduardo Santos Gomes - 20242370001
- Luana Gabriella Pereira Macedo - 20242370026
- Ramotep Lopes Rodrigues Souza Dantas - XXXXXXXXXXX

### Figma

### Atividade

Desenvolva uma tela de um sistema responsivo (Web e mobile), contendo obrigatoriamente um header (navegação global com logo, serviços e seções principais – navegação primária), o footer e uma página qualquer do sistema. A atividade se resumirá exclusivamente a uma única tela. Deve conter ao menos três componentes/elementos de entrada, três de saída, um de navegação, um de ajuda e um de agrupamento. Os elementos/componentes devem ser contextualizados ao sistema que se está propondo (não aleatórios). Considere os princípios de design, usabilidade e UX, além de tudo que vimos no curso até agora, minimize o esforço cognitivo dos usuários.  

Tenha em mente pelo menos dois padrões de projeto de interfaces (UI Design Patterns) no desenvolvimento do projeto, precisará destacá-los na apresentação.

Deve utilizar um dos frameworks de frontend (pode utilizar outro que não esteja na lista, mas justifique ao professor):   Bootstrap: Bootstrap, React-Bootstrap, NG Bootstrap, BootstrapVue, MDBootstrap. Baseado em React.js: Material UI (MUI), Chakra UI, Ant Design (AntD), Blueprint.js, ShadCN/UI. Baseado em Vue.js: Vuetify, Quasar Framework, Element Plus, PrimeVue, BootstrapVue. Baseado em Angular: Angular Material, NG-ZORRO, PrimeNG, Nebular, NG Bootstrap. Multiplataforma:  Tailwind UI, Stencil.js.

---

## Documentação do Projeto

### Sistema Desenvolvido

**Uso da página redesenhada (figma) inicial do Mercado Livre** - Plataforma de e-commerce

### Tecnologias Utilizadas

- **Framework Frontend:** React.js + Vite
- **Framework CSS:** Tailwind CSS (Multiplataforma)
- **Linguagem:** JavaScript (JSX)

### Componentes Implementados

#### Elementos de Entrada (5)

1. Campo de busca de produtos
2. Botão "Explore now" (busca)
3. Links de navegação (Ofertas, Cupons, Vender, Compras)
4. Cards de categorias clicáveis (Home e Decor, Fashion, Eletrônicos, Livros, Esporte)
5. Cards de produtos clicáveis

#### Elementos de Saída (5)

1. Imagens dos produtos (Notebook, Headset, Smartphone, Tablet, Teclado)
2. Preços formatados (R$)
3. Avaliações em estrelas (5 estrelas)
4. Banner com mensagem "Da nossa loja para suas mãos"
5. Ícones informativos no footer (pagamento, segurança, frete)

#### Elementos de Navegação (2)

1. Menu principal horizontal (Ofertas, Cupons, Vender, Compras)
2. Links no footer (Trabalhe conosco, Termos e condições, Contate, Acessibilidade)

#### Elementos de Agrupamento (3)

1. Grid de produtos (5 colunas)
2. Grid de categorias (5 colunas)
3. Seção do footer (3 colunas informativas)

#### Elementos de Ajuda (3)

1. Placeholder no campo de busca ("Buscar produtos...")
2. Informações de métodos de pagamento no footer
3. Informações de segurança e frete grátis no footer

### UI Design Patterns Aplicados

#### 1. **Card Pattern**

- Utilizado para exibir produtos e categorias de forma organizada
- Cada card contém imagem, título, preço e avaliação
- Hover effects para melhorar a interatividade
- Bordas arredondadas e sombras para hierarquia visual

#### 2. **Header/Footer Pattern**

- Header fixo com logo, busca e ícones de ação
- Navegação global acessível em todas as páginas
- Footer informativo com links úteis e informações da empresa
- Cor amarela característica do Mercado Livre (#FFE600)

### Princípios de UX/UI Aplicados

- **Consistência Visual:** Uso de cores, tipografia e espaçamentos padronizados
- **Hierarquia Visual:** Elementos importantes em destaque (logo, busca, produtos)
- **Feedback Visual:** Efeitos hover nos botões e cards
- **Acessibilidade:** Contraste adequado de cores, textos legíveis
- **Esforço Cognitivo Reduzido:** Layout familiar de e-commerce, ícones intuitivos

### Como Executar o Projeto

```bash
cd IHC_MercadoLivre
npm install
npm run dev
```
