import { BlogList } from "./list/blog-list.component";

export const BlogWidget = () => {
  return (
    <main>
      {/* <h1>Блог</h1>
      <InputField
        addTodo={() => {}}
        text="Новый пост"
        setText={() => {}}
        buttonText="Добавить пост"
      />*/}
      <BlogList />
    </main>
  );
};
