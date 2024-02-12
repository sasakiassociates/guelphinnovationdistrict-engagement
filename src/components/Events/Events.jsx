import { observer } from 'mobx-react';
import { henshu, useHenshu } from '@strategies/henshu';

import NavSection from '../NavSection';


export default observer(function Events() {
    const { bindTo } = useHenshu();

    return (
        <NavSection index={4} name="engage.Events">
            <ul>
                <henshu.each {...bindTo('engage.Events.items')}>
                    {(bindToEach, i) => (
                        <li key={i}>
                            <henshu.h4 {...bindToEach('title')} />
                            <henshu.strong {...bindToEach('weekday')} />
                            <henshu.span {...bindToEach('month day')} />
                            <henshu.strong {...bindToEach('time')} />
                            <henshu.p {...bindToEach('body')} />
                        </li>
                    )}
                </henshu.each>
                {/*
                <li>
                    <strong>TBD</strong>
                </li>
                */}
            </ul>
        </NavSection>
    );
});
