import Hero from "@/components/servicesComponents/Hero";
import ServiceAreas from "@/components/servicesComponents/ServiceAreas";
import TruckOptions from "@/components/servicesComponents/TruckOptions";
import TruckService from "@/components/servicesComponents/TruckService";
import WhyChooseUs from "@/components/servicesComponents/WhyChooseUs";


function Services() {
  return (
    <>
      <div>
    <Hero/>
    <TruckService/>
    <TruckOptions/>
    <ServiceAreas/>
    <WhyChooseUs/>
      </div>
    </>
  );
}

export default Services;
