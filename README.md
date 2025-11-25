# Roku Bot Website Frontend

This is the official frontend repository for the **Roku Bot** website. Roku is a multipurpose Discord bot designed to keep servers safe, entertained, and active with features like moderation, automation, leveling, and more.

## 🚀 Project Overview

This project is built using modern web technologies to ensure performance, scalability, and a premium user experience.

- **Framework**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: **SCSS** (Sass) with CSS Modules / BEM naming convention.
- **Icons**: [FontAwesome](https://fontawesome.com/) (via `@fortawesome/fontawesome-free`)

## 🛠️ How to Contribute

We welcome contributions! Please follow these steps to get started:

1.  **Fork the repository** to your own GitHub account.
2.  **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/your-username/roku-website-frontend.git
    cd roku-website-frontend
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
5.  **Make your changes** and test them locally.
6.  **Commit your changes** with descriptive messages.
7.  **Push to your fork** and open a **Pull Request** (PR) to the main repository.

## ⚠️ Project Rules & Guidelines

To maintain code quality and consistency, please adhere to the following rules:

### 1. Styling Rules
- **NO TAILWIND CSS**: Do **not** use Tailwind CSS or any other utility-first CSS framework.
- **Use SCSS**: All styling must be done using SCSS.
- **CSS Custom Properties**: Use CSS variables (defined in `src/styles/_variables.scss`) for colors, fonts, and spacing to support theming (Light/Dark mode).
- **Structure**: Follow the existing directory structure in `src/styles/`. Create new partials for new components and import them in `src/styles/main.scss`.

### 2. Component Structure
- Keep components small, focused, and reusable.
- Place component files in `src/components/{category}/`.
- Use TypeScript interfaces for props.

### 3. Icons
- Use **FontAwesome** icons.
- Do not introduce new icon libraries (like Tabler Icons or Heroicons) unless absolutely necessary and discussed first.

### 4. Code Quality
- Ensure your code passes linting (`npm run lint`).
- Fix any build errors before submitting a PR (`npm run build`).

## 📄 License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.
