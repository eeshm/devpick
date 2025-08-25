import Categories from "@/components/Categories";

export default async function CategoriesRedirect() {
  return (
    <div className="flex flex-col items-center mt-16 px-4 ">
        <h1 className="text-4xl text-center md:text-5xl font-light tracking-tight mb-4">
          Choose a Category to Dive In
        </h1>
        <p className="text-md max-w-md text-center">
          Select a category below to explore and compare the best tech stacks
          available in that space.
        </p>

      <div className="mt-10 w-full max-w-4xl">
        <Categories />
      </div>
    </div>
  );
}
