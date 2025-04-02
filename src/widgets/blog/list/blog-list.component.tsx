// import { useAppSelector } from "../../../app/store/hook";
import { BlogItem } from "../item/blog-item.component";

export const BlogList = () => {
  // const posts = useAppSelector((state) => state.posts.list);

  return (
    <ul>
      {/* {posts.map((post) => {
        <BlogItem />;
      })} */}

      <BlogItem />
    </ul>
  );
};
