import { useState } from "react";
import { api } from "../utils/api";
import { object, string } from "zod";

export const tweetSchema = object({
  text: string({
    required_error: "Tweet text is required",
  })
    .min(10)
    .max(280),
});

export function CreateTweet() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const { mutateAsync } = api.tweet.create.useMutation();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await tweetSchema.parse({ text });
    } catch (e) {
      setError((e as Error).message);
      return;
    }
    mutateAsync({ text });
  }
  return (
    <>
      {error && JSON.stringify(error)}
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col rounded-md border-2 p-4"
      >
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 shadow"
        >
          {" "}
        </textarea>

        <div className="mt-4 flex justify-end">
          <button
            className="rounded-md bg-primary px-4 py-2 text-white  hover:bg-blue-400 hover:transition"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </>
  );
}
