import services from "@/lib/store/services";
import { TransitionFromBottom, TransitionParent } from "@/lib/utils/transitions";

const Offer = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="mb-5">
        <h3 className="text-3xl font-bold uppercase md:text-4xl text-start">
          Services<span className="text-primary">.</span>
        </h3>
        <p className="text-sm font-semibold text-primary opacity-80">What I Offer.</p>
      </div>

      <TransitionParent addClass="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
        {services.map((service, idx) => (
          <TransitionFromBottom
            key={idx}
            addClass="p-6 rounded-md text-center hover:border-primary border-2 border-transparent duration-200 group cursor-default bg-[#0f0f0f94]"
          >
            <div className="space-y-5 text-primary">
              <div className="flex items-center justify-center text-5xl">{service.icon}</div>

              <h4 className="text-3xl font-semibold">{service.type}</h4>
              <>{service.description}</>
            </div>
          </TransitionFromBottom>
        ))}
      </TransitionParent>
    </section>
  );
};

export default Offer;
