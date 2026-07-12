import {EXPERIENCES, LINKS} from '@/lib/constants';
import {ExternalLinkIcon} from 'lucide-react';
import {Badge} from '@/components/ui/badge';

export const Experience = () => {
  return (
    <section id={LINKS[1].href.replace('#', '')} className="pt-16">
      <h2 className="font-semibold text-2xl">Experience</h2>

      <div className="mt-12 space-y-10">
        {EXPERIENCES.map((experience, index) => (
          <div key={index}>
            <p className="font-medium text-sm text-muted-foreground">
              <span>{experience.start_date}</span>{' '}
              {experience.end_date && <span>- {experience.end_date}</span>}
            </p>
            <div className="flex items-center flex-wrap gap-4 gap-y-1 mt-1.5">
              <h3 className="font-semibold text-lg flex items-center flex-wrap gap-2">
                <span>{experience.position}</span>
                <div className="w-1 h-1 rounded-full bg-foreground" />
                <span>{experience.company}</span>
              </h3>

              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon className="text-primary size-4" />
              </a>
            </div>
            <p className="mt-2 text-muted-foreground">
              {experience.description}
            </p>
            <div className="flex items-center gap-2 flex-wrap mt-4">
              {experience.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  className="bg-primary/15 text-primary border border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
