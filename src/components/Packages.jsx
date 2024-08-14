import { FiPackage, FiCheck } from "react-icons/fi";


export default function Costs({ title, description, features, cost }) {
  return(
    <section className="rounded-xl border-4 p-4 m-4 p-4 flex flex-col gap-4 md:w-2/3 lg:w-2/4 mb-20">
      <div className="flex gap-4 items-center">
        <FiPackage size={42} className="text-teal-500" />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-sm">{description}</p>
      {features.map((feature, index) => (
        <div key={index} className="flex justify-start gap-4">
          <FiCheck size={24} className="text-teal-500"/>
          <p className="text-xs font-semibold uppercase">{feature}</p>
        </div>
      ))}
      <p className="bg-gray-200 rounded p-4 font-bold w-fit">{`Prices from ${cost}`}</p>
    </section>
  )

}