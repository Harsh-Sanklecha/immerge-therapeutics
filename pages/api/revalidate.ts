import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("REQ", req.body);

  try {
    if (req.body.post_status === "publish") {
      if (req.body.post_type === "post") {
        console.log("revalidating post");
        await res.revalidate(`/case-studies/${req.body.post_id}`);
        await res.revalidate(`/blogs/${req.body.post_id}`);
      } else {
        console.log("revalidating");
        await res.revalidate(`/`);
        await res.revalidate("/case-studies");
        await res.revalidate("/blogs");
        await res.revalidate(`/${req.body.post_slug}`);
      }
      return res.json({ revalidated: true });
    }
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
