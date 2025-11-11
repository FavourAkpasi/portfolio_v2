import {LINKS} from '@/lib/constants';

export const About = () => {
  return (
    <section id={LINKS[0].href.replace('#', '')} className="pt-16">
      <h2 className="font-semibold text-2xl">About</h2>

      <div className="mt-12 space-y-4 text-muted-foreground">
        <p>
          I’m a software engineer who loves crafting clean, intuitive interfaces
          that merge thoughtful design with solid engineering. My favorite
          projects sit right at the intersection of creativity and logic —
          turning ideas into smooth, engaging digital experiences that just feel
          right to use.
        </p>
        <p>
          My background in Electrical and Electronic Engineering laid the
          groundwork for my problem-solving mindset and technical curiosity. I’m
          currently pursuing a Master’s in Cyber Security, deepening my
          understanding of secure systems and modern digital infrastructures.
        </p>
        <p>
          I specialize in building products with TypeScript, React, Next.js, and
          React Native, often focusing on performance, maintainability, and
          great user experience. I enjoy designing reusable components, refining
          interactions, and writing code that balances efficiency with clarity.
          Collaboration is a big part of my process — working closely with
          designers and backend teams to bring concepts to life from sketch to
          screen.
        </p>
        <p>
          Outside of work, I’m a creative at heart. I draw, paint, and often
          find inspiration in music, movies, and animation. Whether it’s
          sketching ideas or fine-tuning pixels, I’m always exploring new ways
          to blend art and technology into meaningful, well-crafted experiences.
        </p>
      </div>
    </section>
  );
};
