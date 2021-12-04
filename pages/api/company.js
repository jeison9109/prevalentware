import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { id, status } = req.body;
  const result = await prisma.company.update({
    where: { id },
    data: {
      status,
    },
  });

  res.json({
    message: "Company updated successfully",
    ...result,
  });
}
