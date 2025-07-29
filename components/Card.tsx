const snippet ={
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "ahMYOBwkOXL78UPVB7VdnChB16Q",
      "id": {
        "kind": "youtube#playlist",
        "playlistId": "PLinedj3B30sDby4Al-i13hQJGQoRQDfPo"
      },
      "snippet": {
        "publishedAt": "2023-01-03T06:49:44Z",
        "channelId": "UCf9T51_FmMlfhiGpoes0yFA",
        "title": "Master NodeJS",
        "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ohIAiuHMKMI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ohIAiuHMKMI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "image",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Piyush Garg",
        "liveBroadcastContent": "none",
        "publishTime": "2023-01-03T06:49:44Z"
      }
    }
  ]
}

import Image from "next/image";

export default function Card(){
    return (
    <div className="bg-black shadow-md rounded-lg overflow-hidden max-w-sm mx-auto hover:shadow-xl transition duration-300">
        <Image 
        src={"https://i.ytimg.com/vi/ohIAiuHMKMI/mqdefault.jpg"} 
        alt="Playlist Thumbnail"
        width={480}
        height={360}
        className="w-full h-48 object-cover" />
        </div>
    )
}