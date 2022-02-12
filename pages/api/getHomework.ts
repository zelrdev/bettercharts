import type { NextApiRequest, NextApiResponse } from "next";
import { ClasschartsClient } from "classcharts-api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate } = req.query;

  if (startDate && endDate) {
    if (!(req.cookies?.cc_access_code && req.cookies?.cc_date_of_birth))
      return res.status(401).json({ message: "Unauthorized" });

    const client = new ClasschartsClient(
      req.cookies?.cc_access_code,
      req.cookies?.cc_date_of_birth
    );

    try {
      await client.login();
    } catch {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const homeworkInfo = await client.listHomeworks({
      displayDate: "due_date",
      fromDate: startDate.toString(),
      toDate: endDate.toString(),
    });

    return res.status(200).json(homeworkInfo);
  } else {
    if (!(req.cookies?.cc_access_code && req.cookies?.cc_date_of_birth))
      return res.status(401).json({ message: "Unauthorized" });

    const client = new ClasschartsClient(
      req.cookies?.cc_access_code,
      req.cookies?.cc_date_of_birth
    );

    try {
      await client.login();
    } catch {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const homeworkInfo = await client.listHomeworks();

    return res.status(200).json(homeworkInfo);
  }
};
