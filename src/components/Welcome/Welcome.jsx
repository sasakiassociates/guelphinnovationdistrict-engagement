import { useState } from 'react';
import { observer } from 'mobx-react';
import { FiChevronDown } from 'react-icons/fi';
import { Anchor } from '@strategies/react-anchors';
import { henshu, useHenshu } from '@strategies/henshu';

import NavSection from '../NavSection';
import { ENGAGEMENT_LINK } from '../../config';

import banner from '../../assets/Trimmed_AdobeExpress.mp4';

export default observer(function Welcome() {
    const { bindTo } = useHenshu();
    const [promptHidden, setPromptHidden] = useState(false);

    return (
        <div className="Welcome-wrap">
            <div className="video-wrap">
                <iframe src="https://player.vimeo.com/video/846655662?h=ca054582b3&badge=0&autopause=0&player_id=0&app_id=58479&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Guelph Innovation District"></iframe>
            </div>
            <NavSection name="Welcome" index={0}>
                <Anchor onChange={(anchor) => setPromptHidden(anchor.placement === 'offscreen')} />
                
                <div className="links">
                    <henshu.h1 {...bindTo('engage.welcome.title')} />
                    <henshu.richtext {...bindTo('engage.welcome.body')} />
                    <henshu.a
                        className="button"
                        href={ENGAGEMENT_LINK}
                        {...bindTo('calendar.button')}
                    />
                </div>
            </NavSection>

            <footer
                className={promptHidden ? 'hidden' : ''}
                onClick={() => window.scrollTo({ top: window.innerHeight - 100, left: 0, behavior: 'smooth' })}
            >
                <FiChevronDown />
            </footer>
        </div>
    );
});
