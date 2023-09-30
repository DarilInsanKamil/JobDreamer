import { LoaderSkeleton } from "@/components";
const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function DetailJob({ params }) {
  // const data = await getData(params.slug);
  return (
    <>
      {dummy.map((res, idx) => {
        return <LoaderSkeleton key={idx} />;
      })}
    </>
  );
}
