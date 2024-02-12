import { observer } from "mobx-react"
import NavSection from '../NavSection';
import { useHenshuApp } from '@strategies/henshu-app';
import { henshu, useHenshu } from '@strategies/henshu';
import { useState } from "react";
import { Modal, Body, IconButton } from "@strategies/ui";
import { FiXCircle } from "react-icons/fi";

const LINKS = [
    'https://www.downtownevansville.com/',
    'https://www.evansvilleregion.com/',
    'https://www.sasaki.com/',
    'https://www.hraadvisors.com/',
    'https://nelsonnygaard.com/',
    'https://www.haferdesign.com/',
    'https://morleycorp.com/',
];

export default observer(function Team() {

    const { persist, isEditing } = useHenshuApp();
    const { upload } = useHenshuApp().persist;
    const { bindTo } = useHenshu();
    const [ active , setActive] = useState(false)
    return (<NavSection index={2} name="Team">

        {/* <henshu.richtext {...bindTo('engage.Team.body')} /> */}
 
        <div className="Team-teams">

            <henshu.each {...bindTo('engage.Team.teams')}>
                {(bindToEach, i)=> (
                    <div key={i}
                        className={`Team-teams--team ${(active === i)  ? "active" : ""}`}
                    >

                        {
                            (active !== i) ?
                            <>
                            <a href={ bindToEach('link').get()}>
                                 <henshu.img
                                    get={() => bindToEach('image').get()}
                                    set={async buf => bindToEach('image').set(buf ? await upload(buf) : '')}
                                    onClick={e=> console.log("eee", e)}
                                />

                            </a>
                                {isEditing && <input onChange={(e)=>{bindToEach('link').set(e.target.value)}} value={bindToEach('link').get()}></input>}               

                                {/* <henshu.h5 {...bindToEach('name')} /> */}
                                {/* <henshu.richtext {...bindToEach('title')} /> */}
                                {/* <henshu.a
                                    className="button primary"
                                    onClick={() => {console.log("click", i); setActive(i)}}
                                    {...bindTo('engage.team.submit')}
                                /> */}
                            </> :

                            <>
                                <henshu.img
                                    get={() => bindToEach('image').get()}
                                    set={async buf => bindToEach('image').set(buf ? await upload(buf) : '')}
                                />

                                <IconButton onClick={() => setActive(undefined)}> <FiXCircle/></IconButton>

                                <henshu.h5 {...bindToEach('name2')} />
                                <henshu.richtext {...bindToEach('body')} />
                                <henshu.a {...bindToEach('link')} href={LINKS[i]} rel="noreferrer noopener" target="_blank" />
                            </>
                        }

                </div>

                )}

            </henshu.each>


        </div>
    </NavSection>)

});

