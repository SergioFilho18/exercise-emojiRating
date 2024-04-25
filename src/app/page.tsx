import { EmojiRating } from "./Components/EmojiRating";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rate ={1.0}/>
    </div>
  );
}

export default Page;