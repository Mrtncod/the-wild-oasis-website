import { getCountries } from "@/app/_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();

  const flag =
    countries.find(
      (country) => country.name.toLowerCase() === defaultCountry?.toLowerCase(),
    )?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>

      {countries.map((country) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;

// import { getCountries } from '@/app/_lib/data-service';

// // Let's imagine your colleague already built this component 😃

// async function SelectCountry({ defaultCountry, name, id, className }) {
//   const countries = await getCountries();
//   const flag =
//     countries.find((country) => country.name === defaultCountry)?.flag ?? '';

//   return (
//     <select
//       name={name}
//       id={id}
//       // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
//       defaultValue={`${defaultCountry}%${flag}`}
//       className={className}
//     >
//       <option value=''>Select country...</option>
//       {countries.map((c) => (
//         <option key={c.name} value={`${c.name}%${c.flag}`}>
//           {c.name}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default SelectCountry;
/////////////////////////////////////////////////////
