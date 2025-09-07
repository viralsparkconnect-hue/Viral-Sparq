import { services } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard"; // ✅ new

export const metadata = { title: "Services — ViralSpark" };

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="h2">Our Services</h1>
          <p className="p mt-3">
            Pick a service just like shopping — clear pricing & easy checkout coming soon 🚀
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                price={s.price}
                features={s.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
