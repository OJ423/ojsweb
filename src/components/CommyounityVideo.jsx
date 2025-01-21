"use client"

import ReactPlayer from "react-player";

export default function CommyounityVideo() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <ReactPlayer
        url="https://youtu.be/YE43ESLn-2M?si=_-WXvXl3uoQjcJy2"
        controls={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
