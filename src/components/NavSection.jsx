import { useCallback, ReactNode } from 'react';
import { Anchor } from '@strategies/react-anchors';
import { useHenshu, henshu } from '@strategies/henshu';

import { MENU } from '../config';
import { useContext } from '../context';


type NavSectionProps = {
    children: ReactNode;
    index: number;
    name: string;
    style?: any;
};

export default function NavSection({ children, index, name, style = {} }: NavSectionProps) {
    const { bindTo } = useHenshu();
    const { update } = useContext();
    const id = MENU[index].href.replace('#', '');

    const updateSection = useCallback((section: number) => {
        window.history.replaceState(null, window.location.hash, MENU[section].href);
        update({ section });
    }, [update]);

    return (
        <div className={`NavSection ${name}`} style={style}>
            <Anchor
                id={id}
                onTop={() => updateSection(index)}
                onOffscreen={(anchor: any) => anchor.top >= window.innerHeight && updateSection(index - 1)}
            />

            <div className="content">
                {<>
                {/* <henshu.h3 {...bindTo(`engage.${name}.subtitle`)} /> */}
                    <henshu.h2 {...bindTo(`engage.${name}.title`)} />
                </>}

                {children}
            </div>
        </div>
    );
};
