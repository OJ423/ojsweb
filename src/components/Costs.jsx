import { PiYarn } from "react-icons/pi";


export default function Costs({ description, cost }) {
  return(
    <section className="rounded-xl border-4 p-4 mx-4 p-4 flex flex-col gap-4 md:w-2/3 lg:w-2/4 my-20">
      <div className="flex gap-4 items-center">
        <PiYarn size={42} className="text-teal-500" />
        <h2 className="text-xl font-bold text-gray-800">Example costs...</h2>
      </div>
      <p>{description}</p>
      <p className="bg-gray-200 rounded p-4 font-bold w-fit">{`Prices start from ${cost}`}</p>
    </section>
  )

}