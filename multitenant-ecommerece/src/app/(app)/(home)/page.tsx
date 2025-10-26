import configPromise from "@payload/config";
import { getPayload } from "payload/client";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    collection: "categories",
    depth: 1, // to fetch subcategories
    where: {
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
}
