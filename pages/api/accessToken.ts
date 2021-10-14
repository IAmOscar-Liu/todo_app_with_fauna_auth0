import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export default withApiAuthRequired(async function shows(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // console.log("try to get access token");
    const { accessToken } = await getAccessToken(req, res);
    // console.log("accessToken: ", accessToken);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
    // res.status(200).json({ accessToken: "" });
  }
});

// export default withApiAuthRequired(shows);

// export default accessTokenApi;
