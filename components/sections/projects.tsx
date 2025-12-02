import { LINKS, PROJECTS } from "@/lib/constants";
import { Card } from "../ui/card";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
	return (
		<section id={LINKS[2].href.replace("#", "")} className="pt-16">
			<h2 className="font-semibold text-2xl">Projects</h2>

			<div className="mt-12 space-y-10">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="group relative rounded-xl p-[2px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
					>
						<div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_17%,#00FF00_33%,#00FFFF_50%,#0000FF_67%,#FF00FF_83%,#FF0000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
						<Card className="relative h-full flex flex-col sm:flex-row items-start gap-4 p-3 bg-card rounded-xl border-0">
							<div className="flex-1 w-full sm:max-w-[200px] aspect-video rounded-lg border">
								<Image
									src={project.image}
									alt={project.name}
									width={500}
									height={281.25}
									className="w-full aspect-video object-cover object-top rounded-lg"
								/>
							</div>
							<div className="flex-1">
								<div className="flex items-center flex-wrap gap-4 gap-y-1">
									<h3 className="font-semibold flex items-center flex-wrap gap-2 text-lg">
										<span>{project.name}</span>
										<div className="w-1 h-1 rounded-full bg-foreground" />
										{project.made_at && (
											<Badge className="bg-primary/15 text-primary border border-primary/20">
												Made @ {project.made_at}
											</Badge>
										)}
									</h3>

									<div className="flex items-center gap-2">
										<a
											href={project.website}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLinkIcon className="text-primary size-4" />
										</a>
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaGithub className="text-primary size-4" />
											</a>
										)}
									</div>
								</div>

								<p className="mt-3 text-muted-foreground sm:text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
									{project.description}
								</p>
							</div>
						</Card>
					</div>
				))}
			</div>
		</section>
	);
};
