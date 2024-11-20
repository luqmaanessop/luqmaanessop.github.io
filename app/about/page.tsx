import Image from "next/image";
import { socialLinks } from "../config";

export default function Page() {
  return (
    <section className="flex-1 w-full container-text">
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Frontend Developer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Committed to making ethical, principled decisions while fostering
          collaboration and a positive work environment that encourages personal
          growth. Self-motivated and experienced in working with distributed
          teams, I am dedicated to contributing value to the team, maintaining a
          high standard of professional excellence, and promoting well-being.
        </p>
      </div>
    </section>
  );
}
