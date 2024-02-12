import { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useHenshuApp } from '@strategies/henshu-app';
import { henshu, useHenshu } from '@strategies/henshu';

import FadeUp from '../FadeUp/FadeUp';
import NavSection from '../NavSection';
import Section from '../Section/Section';
import { ENGAGEMENT_URL } from '../../config';
import ContactForm from '../ContactForm/ContactForm';


export default observer(function Vision() {
    const { isEditing } = useHenshuApp();
    const { bindTo } = useHenshu();
    const { upload } = useHenshuApp().persist;

    return <>
        {/* <NavSection index={1} name="Vision">
            <henshu.richtext {...bindTo('Vision.body')} />
        </NavSection> */}

        <div className="NavSection Vision-scroll">
            <henshu.each {...bindTo('Vision.scroll')}>
                {(bindToEach, i) => (
                    <div key={i}>
                        <Section index={i + 1}>
                            <main>
                                <FadeUp>
                                    { (i === 0) ? <><henshu.h3 {...bindToEach('title')} /></>
                                    :
                                    <><henshu.h3 {...bindToEach('title')} /><henshu.richtext className="content-header" {...bindToEach('content')} /></>


                                    }
                                    
                                    {/* { (i === 2 || i === 3 || i === 4 || i === 6 || i === 7) ?
                                    <div className='legend-img-wrap'>  <henshu.img
                                            get={() => bindToEach('image').get()}
                                            set={async buf => bindToEach('image').set(buf ? await upload(buf) : '')}
                                        /></div>
                                        :
                                        <></>

                                    } */}

                                </FadeUp>
                            </main>
                        </Section>
                    </div>
                )}
            </henshu.each>
        </div>

        {/* <img className="full-bleed" src={FullBleed} alt="" /> */}
    </>;
});

