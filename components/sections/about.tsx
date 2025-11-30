import { LINKS } from '@/lib/constants';

export const About = () => {
  return (
    <section id={LINKS[0].href.replace('#', '')} className="pt-16">
      <h2 className="font-semibold text-2xl">About</h2>

      <div className="mt-12 space-y-4 text-muted-foreground">
        <p>
          I’m a software engineer who loves crafting intuitive solutions
          that merge thoughtful design with solid engineering. My favorite
          projects sit right at the intersection of creativity and logic —
          turning ideas into smooth, engaging digital experiences that feel just
          right to use.
        </p>
        <p>
          My background in Petroleum Engineering laid the
          groundwork for my problem-solving mindset and technical curiosity. I’m
          currently pursuing a Master’s in Artificial Intelligence, deepening my
          understanding of modern digital infrastructures.
        </p>
        <p>
          I enjoy leveraging the latest technologies - especially in the
          JavaScript and Python ecosystems - for building scalable and maintainable
          software solutions. I enjoy designing reusable components, refining interactions, improving flows
          and writing code that balances efficiency with usability.
          Collaboration is important to me and I value working closely with designers,
          developers, product owners, and stakeholders to take solutions from ideas to services.
        </p>
        <p>
          I am currently a senior software engineer at Refinq GmbH, Austria.
          I am not actively looking for a new role at the moment, but I am open to discussions
          about potential opportunities.
        </p>

      </div>
    </section>
  );
};
