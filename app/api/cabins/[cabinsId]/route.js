import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinsId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinsId),
      getBookedDatesByCabinId(cabinsId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found " });
  }
}
