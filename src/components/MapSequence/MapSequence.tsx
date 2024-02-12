/**
 * MapSequence
 *
 * This is the map building sequence that remains fixed in the browser window while
 * the user is scrolling. As each Section passes the screens vertical midpoint,
 * the next map image is loaded into the frame.
 */

import { useEffect, useState } from 'react';
import { henshu, useHenshu } from '@strategies/henshu';

import { useContext } from '../../context';


/**
 * Images
 */


import Map1 from './assets/web_Community-Engagement_Website-Images_1.png';
import Map2 from './assets/web_Community-Engagement_Website-Images_2.png';
import Map3 from './assets/web_Community-Engagement_Website-Images_3.png';

const MAPS = [
    undefined,
    Map1,
    Map2,
    Map3
];

export default function MapSequence() {
    const { bindTo } = useHenshu();
    const { map } = useContext();
    const [modalActive, setModalActive] = useState<boolean>(false);

    return <>
        <div className="MapSequence">
            <div className={`maps`}>
                {MAPS.map((src, i) => (
                    <div key={`${i}-${src}`} className={`map ${map! === i ? 'active' : ''}`}>
                        <img src={src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </>;
}
