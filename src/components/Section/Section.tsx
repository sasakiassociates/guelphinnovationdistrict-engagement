import { ReactNode } from 'react';
import { Anchor } from '@strategies/react-anchors';

import { useContext } from '../../context';


type SectionProps = {
    children: ReactNode;
    className?: string;
    index?: number;
};

export default function Section({ children, className = '', index }: SectionProps) {
    const { update } = useContext();

    return (
        <section className={`Section ${className}`}>
            <Anchor 
                onCenter={() => index && update({ map: index })}
                onOffscreen={(anchor: any) => !(anchor.top < 0) && index && update({ map: index - 1 })}
            />

            {children}
        </section>
    );
}
