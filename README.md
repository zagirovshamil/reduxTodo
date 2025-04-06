# React + TypeScript + Vite

Приложение(SPA) под капотом использует сборщик vite, написан на фреймворке React, типизация Typescript, в качестве стилей используется препроцессор SCSS, в качестве ui используется библиотека atnd. 

## Expanding the ESLint configuration


```js
git clone https://github.com/zagirovshamil/reduxTodo.git
```

Была решена проблема конфликта использования старого движка под капотом vite и scss

```js
 export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});

```
