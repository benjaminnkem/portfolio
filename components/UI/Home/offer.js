import services from "@/lib/store/services";
import { TransitionFromBottom, TransitionParent } from "@/lib/utils/transitions";

const Offer = () => {
  return (
    <section className="container my-20 mx-auto">
      <div className="mb-5">
        <h3 className="text-3xl font-bold uppercase md:text-4xl text-start">
          Services<span className="text-primary">.</span>
        </h3>
        <p className="text-sm font-semibold text-primary">What I Offer.</p>
      </div>

      <TransitionParent addClass="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
        {services.map((service, idx) => (
          <TransitionFromBottom
            key={idx}
            addClass="p-6 rounded-md shadow-sm hover:border-primary border-2 border-transparent duration-200 group shadow-primary self-start bg-[#0f0f0f94]"
          >
            <div className="space-y-5 text-primary">
              <>{service.icon}</>

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
