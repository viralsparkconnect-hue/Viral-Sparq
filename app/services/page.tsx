import { services } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ Import WhatsAppButton

export const metadata = { title: "Services — ViralSpark" };

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="h2">Services</h1>
          <p className="p mt-3">Choose one channel or combine for compounding growth.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="text-primary text-2xl font-bold">{s.icon}</div>
                <div className="mt-3 font-bold text-lg">{s.title}</div>
                <p className="mt-2 text-gray-600">{s.description}</p>
                <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
                  <li>Strategy & roadmap</li>
                  <li>Implementation</li>
                  <li>Reporting & iteration</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
