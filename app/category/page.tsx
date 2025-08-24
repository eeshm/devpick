import Categories from "@/components/Categories";

export default async function CategoriesRedirect() {
  return (
    <div className="flex flex-col items-center mt-16 px-4 font-grostek">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Choose a Category
        </h1>
        <p className="text-sm md:text-sm ">
          Select a category below to explore and compare the best tech stacks
          available in that space.
        </p>
      </div>

      <div className="mt-10 w-full max-w-4xl">
        <Categories />
      </div>
    </div>
  );
}
