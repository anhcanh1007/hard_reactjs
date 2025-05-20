import { useEffect } from "react";
import PostItem from "../PostItem/PostItem";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../../../../store";
import { deletePost, editingPost, getPostList } from "../../blog.slice";
import SkeletonPost from "../SkeletonPost";

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const disPatch = useAppDispatch();

  useEffect(() => {
    // const controller = new AbortController();
    // http
    //   .get("posts", {
    //     signal: controller.signal,
    //   })
    //   .then((res) => {
    //     const data = res.data;
    //     console.log(data);
    //     disPatch({
    //       type: "blog/getPostListSuccess",
    //       payload: data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    // return () => {
    //   controller.abort();
    // }; => cachs gọi api thong thường
    const promise = disPatch(getPostList());
    return () => {
      promise.abort();
    };
  }, [disPatch]);

  const handleDelete = (id: string) => {
    disPatch(deletePost(id));
  };
  const hanleEditingPost = (id: string) => {
    disPatch(editingPost(id));
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Được Dev Blog
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ.
              Nhưng ngày mốt sẽ có nắng
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            {loading && (
              <>
                <SkeletonPost />
                <SkeletonPost />
              </>
            )}
            {!loading &&
              postList.map((post) => (
                <PostItem
                  post={post}
                  key={post.id}
                  handleDelete={handleDelete}
                  hanleEditingPost={hanleEditingPost}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
