import { useState, ReactNode, useEffect } from 'react';
import { Anchor } from '@strategies/react-anchors';


type FadeUpProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    auto?: boolean;
};

export default function FadeUp({ auto, children,  className = '', delay = 0 }: FadeUpProps) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (auto) {
            setTimeout(() => setActive(true), 0);
        }
    });

    return (
        <div 
            className={`FadeUp ${active ? 'active' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <Anchor onCenter={() => setActive(true)} onOffscreen={(a: any) => a.top <= 0 && setActive(true)} />
            {children}
        </div>
    );
};
