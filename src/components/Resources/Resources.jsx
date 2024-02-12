import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useHenshuApp } from '@strategies/henshu-app';
import { henshu, useHenshu } from '@strategies/henshu';
import { FiImage, FiLink } from 'react-icons/fi';
import { Modal, Title, Body } from '@strategies/ui';
import DragDrop from '@strategies/react-drag-drop';

import NavSection from '../NavSection';
import rightArrowIcon from '../../assets/arrow-brand.svg';


const COLORS = [
    '#B72B35',
    '#255945',
    '#F4BB54',
    '#CE9CBC',
];

const ICONS = {
    link: <FiLink />,
    modal: <FiImage />,
};

const Resource = observer(({ bindTo, i }) => {
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState(bindTo('engage.action.value').get());
    const { persist, isEditing } = useHenshuApp();
    const { upload } = persist;

    const action = bindTo('engage.action').get() || 'modal';
    const isModal = action === 'modal';

    console.log(i, isModal);

    useEffect(() => {
        setInputValue('');
    }, [action]);

    useEffect(() => {
        //bindTo('action.value').set(inputValue);
    }, [inputValue]);

    const inner = <>
        {isEditing && (
            <henshu.img
                get={() => bindTo('image').get()}
                set={async buf => bindTo('image').set(buf ? await upload(buf) : '')}
            />
        )}

        <div className="resource-content">
            <div className="icon-wrapper">
                {ICONS[action]}
                <img src={rightArrowIcon} alt="" aria-hidden="true" />
            </div>

            <henshu.h4 {...bindTo('title')} />
            <henshu.p {...bindTo('subtitle')} />
        </div>

        {isModal && (
            <Modal active={modal} onClose={() => setModal(false)}>
                <Title><henshu.h3 {...bindTo('title')} /></Title>
                <Body>
                    <henshu.richtext {...bindTo('modal.body')} />
                </Body>
            </Modal>
        )}

        {isEditing && (
            <div className="resource-meta">
                <select
                    value={action}
                    onChange={async e => {
                        bindTo('action').set(e.target.value);
                    }}
                >
                    <option value={'modal'}>Modal</option>
                    <option value={'link'}>Link</option>
                </select>

                {action === 'link' && (
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                )}

                {action === 'file' && (
                    <DragDrop onLoad={setInputValue} />
                )}
            </div>
        )}
    </>;

    const image = bindTo('image').get();

    return (
        <li
            onClick={!modal && !isEditing && isModal ? () => setModal(true) : () => {}}
            style={image ? ({backgroundImage: `url(${image})`}) : ({ background: COLORS[i % COLORS.length] })}
        >
            {!isModal && !isEditing ? (
                <a
                    href={bindTo('action.value').get()}
                    rel="noopener noreferrer" target="_blank"
                >
                    {inner}
               </a>
            ) : inner}
        </li>
    );
});


export default observer(function Resources() {
    const { bindTo } = useHenshu();

    return (
        <NavSection index={3} name="Resources">
            <ul>
                <henshu.each {...bindTo('engage.resources')}>
                    {(bindToEach, i) => <Resource key={i} i={i} bindTo={bindToEach} />}
                </henshu.each>
            </ul>
        </NavSection>
    );
});
