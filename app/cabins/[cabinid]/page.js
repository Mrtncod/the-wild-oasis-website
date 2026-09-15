import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

/////////////////////
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinid);
  return {
    title: `Cabin ${name}`,
  };
}
//////////////////
export async function generateStaticParams() {
  const cabins = await getCabins();
  // cabinid is because of the folder cabinid
  const ids = cabins.map((cabin) => ({ cabinid: String(cabin.id) }));
  console.log(ids);
  return ids;
}
//////////////
export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinid);
  // const setting = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinid);

  // const { id, name, maxCapacity, regularPrice, discount, image, description } =
  //   cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div>
        <Cabin cabin={cabin} />
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
