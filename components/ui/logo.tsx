import {cn} from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({className}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('w-9 h-9', className)}>
      <Image
        src="/images/f-logo.png"
        alt="Logo"
        width={36}
        height={36}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
