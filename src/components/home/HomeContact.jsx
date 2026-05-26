import Postcard from "../Postcard";

export default function HomeContact() {
  return (
    <section id="contact" className="px-6 md:px-16 pt-12 pb-24">
      <h2 className="mb-6">
        Let’s <span className="text-accent">build</span> something together!
      </h2>

      <Postcard />
    </section>
  );
}