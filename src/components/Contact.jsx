import Reveal from "./Reveal";

export default function Contact() {
  return (
    <div
      className="
        flex flex-col justify-center items-center text-center px-6
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">
          Contact
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className="text-sub dark:text-[#bbbbbb] max-w-xl leading-relaxed">
          이메일: your@email.com
          <br />
          깃허브: github.com/yourprofile
        </p>
      </Reveal>
    </div>
  );
}
