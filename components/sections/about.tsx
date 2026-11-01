import {LINKS} from '@/lib/constants';

export const About = () => {
  return (
    <section id={LINKS[0].href.replace('#', '')} className="pt-16">
      <h2 className="font-semibold text-2xl">About</h2>

      <div className="mt-12 space-y-4 text-muted-foreground">
        <p>
          I’m a software engineer who loves building intuitive products where
          thoughtful design meets solid engineering. My favorite projects sit
          right at the intersection of creativity and logic — turning ideas into
          smooth, engaging digital experiences that feel just right to use.
        </p>
        <p>
          My background in Petroleum Engineering shaped my problem-solving
          mindset and technical curiosity. I’m now pursuing a Master’s in
          Artificial Intelligence at Johannes Kepler University, and I apply it
          every day by Integrating AI into software products where it genuinely
          helps users achieve more out of the product. AI
          tools like Claude Code are also a core part of my own workflow, it
          helps me scaffold, refactor, review and test faster, so I can spend
          more of my time on architecture, product decisions and the details
          users actually notice.
        </p>
        <p>
          I enjoy working with the latest technologies — especially across the
          JavaScript and Python ecosystems — to build scalable, maintainable
          software. I design reusable components, refine interactions, improve
          flows and write code that balances performance with usability.
          Collaboration matters to me: I value working closely with designers,
          developers, product owners and stakeholders to take solutions from
          idea to production.
        </p>
        <p>
          I’m currently a senior web developer at LX media GmbH in Wels,
          Austria, where I build high-performance Next.js websites for a range
          of clients. I’m open to new roles starting January 2027 — feel free to
          reach out if you think I’d be a good fit for your team.
        </p>
      </div>
    </section>
  );
};
