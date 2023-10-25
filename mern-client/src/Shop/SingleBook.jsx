import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();

  return (
    <div className="mt-28 ">
      <img src={imageURL} alt="" className="h-96" />
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
