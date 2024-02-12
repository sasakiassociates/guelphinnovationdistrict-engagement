import { observer } from 'mobx-react';
import { henshu, useHenshu } from '@strategies/henshu';

import { ENGAGEMENT_LINK } from '../../config';

import NavSection from '../NavSection';
import ContactForm from '../ContactForm/ContactForm';


export default observer(function Contact() {
    const { bindTo } = useHenshu();

    return (
        <NavSection index={4} name="Contact">
           <div className="row">
           {/* <div className="links">
                    <henshu.richtext {...bindTo('engage.Contact.body')} />

                    <henshu.a
                        className="button with-arrow blue"
                        href={ENGAGEMENT_LINK}
                        {...bindTo('calendar.button')}
                    />
                </div> */}
                <ContactForm/>
                <div className="engagement-content">
                    
                    <div className="inner-content">
                        {/* <div className="engagement-blurb">
                            <henshu.h4 {...bindTo('engagement.title')} />
                            <henshu.p {...bindTo('Welcome.body')} />
                        </div> */}

                        {/* <henshu.a
                            className="button with-arrow"
                            href={ENGAGEMENT_LINK}
                            {...bindTo('engagement.button')}
                        /> */}
                    </div>
                   
                </div>

            </div>
        </NavSection>
    );
});
