'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { History } from 'lucide-react';
import Image from 'next/image';

const ARCHIVES = [
    {
        version: 'v1.0',
        year: '2022',
        image: '/images/portfolio-v1.png',
        description: 'The first iteration. Built with TypeScript and React JS.',
        link: 'https://favourakpasi.netlify.app',
    },
];

export const TimePortal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="border">
                    <History className="w-6 h-6 text-primary" />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent shadow-none sm:max-w-2xl overflow-visible">
                <div className="relative rounded-xl p-[2px] overflow-hidden">
                    <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_17%,#00FF00_33%,#00FFFF_50%,#0000FF_67%,#FF00FF_83%,#FF0000_100%)] blur-sm" />
                    <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-6 h-full overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                            <Image
                                src="/images/time-portal.gif"
                                alt="Portal Background"
                                fill
                                className="object-cover blur-xs"
                                unoptimized
                            />
                        </div>
                        <div className="relative z-10">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-2xl">
                                    <History className="w-6 h-6 text-primary" />
                                    Time Travel
                                </DialogTitle>
                                <DialogDescription>
                                    Step into the portal and revisit previous versions of my portfolio.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="mt-6 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                                {ARCHIVES.map((archive, index) => (
                                    <div
                                        key={index}
                                        className="flex-none w-[280px] snap-center bg-card/80 border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group/card"
                                    >
                                        <div className="relative aspect-video bg-muted overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/20">
                                                <span className="text-sm">Image Placeholder</span>
                                            </div>

                                            <Image
                                                src={archive.image}
                                                alt={`Portfolio ${archive.version}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                                            />

                                            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                {archive.year}
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-lg">{archive.version}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-3">
                                                {archive.description}
                                            </p>
                                            <Button
                                                variant="default"
                                                className="w-full mt-2 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors"
                                                asChild
                                            >
                                                <a href={archive.link} target="_blank" rel="noopener noreferrer">
                                                    Visit Archive
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
