import { z } from "zod";

const idSchema = z.object({
  id: z.number(),
});

export { idSchema };
