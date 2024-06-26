import { FC } from "react";

interface PostCardProps {
  post: {
    id: string;
    name: string;
  };
}
const PostCard: FC<PostCardProps> = ({ post }) => {
  const { name } = post; // Mendestrukturisasi properti id dan nama dari objek post

  return (
    <div className="card w-full bg-base-100 shadow-xl" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="card-body">
        <div className="card-actions justify-end">
          <p> {name}</p>

        </div>

        <br />
      </div>
    </div>
  );
};

export default PostCard;