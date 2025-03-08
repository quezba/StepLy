import ImageInRectangle from "../../components/imageInRectangle";

export default function Home() {
  const imageUrl = "https://www.mdxblog.io/images/posts/how-to-use-images/grass-tree-sky.jpg";
  return (
    <div className="container">
      <div className="rectangle">
        <ImageInRectangle imageUrl = {imageUrl}/>
      </div>
    </div>
  );
}
