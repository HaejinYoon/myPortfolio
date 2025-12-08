import Reveal from "./Reveal";

export default function Contact() {
  return (
    <div className="
      h-screen flex flex-col justify-center items-center text-center px-6
      bg-bg dark:bg-[#141212]
      text-main dark:text-[#f2f2f2]
      transition-colors duration-300
    ">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
      </Reveal>

      <Reveal>
        <p className="text-lg text-sub">
          📧 hjyoomp@gmail.com
        </p>
      </Reveal>
    </div>
  );
}