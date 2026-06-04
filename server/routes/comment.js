import express from "express";
import { Innertube } from "youtubei.js";

const router = express.Router();

let youtube;

(async () => {
  youtube = await Innertube.create({
    lang: "ja",
    location: "JP",
    retrieve_player: true,
    debug: false,
  });
})();

router.get("/:videoId", async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    return res.status(400).json({ error: "videoId is required" });
  }

  try {

// const commentSection = await youtube.getComments(videoId);

// const commentThreads = commentSection.contents || [];




res.json({

totalCommentCount: "0",

comments: [],

});

} catch (err) {

console.error("コメント取得失敗:", err);

res.status(500).json({ error: "コメントの取得に失敗しました。" });

} 

  
});

export default router;
