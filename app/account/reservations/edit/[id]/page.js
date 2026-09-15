// import { auth } from "@/app/_lib/auth";
import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { id } = params;
  const booking = await getBooking(id);
  console.log(booking);

  const { cabinId } = booking;
  // id: reservationId,
  const { maxCapacity } = await getCabin(cabinId);
  // const { id } = booking;
  // const maxCapacity = 23;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{id}
      </h2>

      <EditReservationForm booking={booking} maxCapacity={maxCapacity} />
    </div>
  );
}
