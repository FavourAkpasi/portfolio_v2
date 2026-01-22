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

import Image from 'next/image';
import { FaDoorOpen } from 'react-icons/fa';
import styles from './time-portal.module.css';

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
            <DialogHeader>
                <DialogTitle className='sr-only'>Time Portal</DialogTitle>
                <DialogDescription className='sr-only'>
                    View older versions of my portfolio
                </DialogDescription>
            </DialogHeader>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="border">
                    <FaDoorOpen className="w-7 h-7 animate-pulse" />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-black/50 shadow-none min-w-full w-screen h-screen m-0 rounded-none overflow-hidden sm:rounded-none">

                {/* Wormhole Animation Container */}
                <div className={styles.portalContainer}>
                    <div className={styles.portalRing}></div>
                    <div className={styles.portalRing}></div>
                    <div className={styles.portalRing}></div>
                    <div className={styles.portalRing}></div>
                    <div className={styles.portalRing}></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none max-w-[600px] mx-auto">
                    <div className="pointer-events-auto space-y-8 animate-in fade-in zoom-in duration-500 delay-300">
                        <p className="text-black text-xl font-bold text-center"> see older versions of my portfolio</p>

                        <div className="flex flex-wrap justify-center gap-8">
                            {ARCHIVES.map((archive, index) => (
                                <a
                                    key={index}
                                    href={archive.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-md border border-black/30 w-48 rounded-md overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={archive.image}
                                            alt={`Portfolio ${archive.version}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 z-20 text-xs text-white/30">
                    <a href="https://codepen.io/jasesmith/pen/qqgvZe" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">
                        FX by Jase Smith
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};
