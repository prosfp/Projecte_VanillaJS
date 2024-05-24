### Aplicació de Gestió de Tasques en VanillaJS

Aquest projecte és un exemple senzill d'una aplicació en VanillaJS que gestiona una llista de tasques (To-Do's) per a diversos usuaris. Les tasques s'obtenen i es guarden a través d'una API externa. L'aplicació permet als usuaris iniciar sessió, veure les seves tasques, marcar-les com a completades i afegir-ne de noves.

L'objectiu principal d'aquest projecte és mostrar com organitzar i estructurar una aplicació en VanillaJS. No ton són bones pràctiques però s'ha intentat seguir una estructura senzilla i fàcil de seguir. A continuació et mostro l'estructura general del projecte:

```bash
- .babelrc
- .eslintrc.json
- .gitignore
- .prettierrc.json
- .vscode/
  - launch.json
- jest.config.js
- package.json
- postcss.config.js
- public/
  - admin.html
  - assets/
    - images/
  - dashboard.html
  - index.html
  - login.html
- README.md
- src/
  - components/
    - AddModal.js
    - DeleteButton.js
    - EditButton.js
    - EditModal.js
    - errorMessage.js
    - Navbar.js
    - TodoItem.js
    - TodoList.js
    - UserList.js
  - index.js
  - pages/
    - AdminPage.js
    - DashboardPage.js
    - LoginPage.js
  - services/
    - auth.js
    - fetchAPI.js
    - tasks.js
    - user.js
  - styles/
    - global.css
    - tailwind.css
  - utils/
    - helpers.js
    - validators.js
- tailwind.config.js
- webpack.config.js
```

### Començar:

Per començar a utilitzar el projecte, segueix aquests passos senzills:

1. **Clonar el Repositori**:

   ```bash
   git clone <url-del-repositori>
   ```

2. **Instal·lar Dependències**:

   ```bash
   cd nom-del-teu-projecte
   npm install
   ```

3. **Iniciar el Servidor de Desenvolupament**:
   Per iniciar el servidor de desenvolupament amb recàrrega en calent:

   ```bash
   npm start
   ```

4. **Construir per a Producció**:
   Per construir el projecte per a producció:

   ```bash
   npm run build
   ```
