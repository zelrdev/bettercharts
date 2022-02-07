import type { NextApiRequest, NextApiResponse } from "next";
import { ClasschartsClient } from "classcharts-api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate } = req.query;

  const client = new ClasschartsClient(
    process.env.TESTING_CLASSCHARTS_CODE!,
    process.env.TESTING_BIRTHDAY
  );
  await client.login();

  if (startDate && endDate) {
    const behaviourInfo = await client.getBehaviour({
      from: startDate.toString(),
      to: endDate.toString(),
    });

    const activityInfo = await client.getActivity({
      from: startDate.toString(),
      to: endDate.toString(),
    });

    return res
      .status(200)
      .json({ behaviour: behaviourInfo, activity: activityInfo });
  } else {
    const behaviourInfo = await client.getBehaviour();

    const activityInfo = await client.getActivity();

    return res
      .status(200)
      .json({ behaviour: behaviourInfo, activity: activityInfo });
  }
};
