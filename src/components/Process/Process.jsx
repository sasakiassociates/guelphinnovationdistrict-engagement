import { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { henshu, useHenshu } from '@strategies/henshu';
import { List, Accordion, Title, Header, Body } from '@strategies/ui';
import { useHenshuApp } from '@strategies/henshu-app';
import NavSection from '../NavSection';
import banner from '../../assets/Trimmed_AdobeExpress.mp4';


export default observer(function Process() {
    const [height, setHeight] = useState('420px');

    const onImageRef = useCallback(ref => {
        if (ref) {
            const setDims = () => {
                const { width } = ref.getBoundingClientRect();
                setHeight(`${width / 1.47}px`);
            };

            (new ResizeObserver(setDims)).observe(ref);

            setDims();
        }
    }, []);
    const { bindTo } = useHenshu();
    const { upload } = useHenshuApp().persist;
    return (
        <NavSection index={3} name="Process">
              <div className="video-wrap">
         
         {/* <video controls={true} autoPlay={false} muted={false} loop={false} className={"welcome-video"} type="video/mp4"  src={banner}/> */}
         <iframe src="https://player.vimeo.com/video/846656270?h=0879c0445a&badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Guelph Innovation District (captions)"></iframe>
         </div>
              {/* <div className="image-wrap">
                         <henshu.img
                             get={() => bindTo('engage.Process.image').get()}
                             set={async (t) => bindTo('engage.Process.image').set(t ? await upload(t) : t)}
                         />
                     </div> */}
        </NavSection>
    );
});
