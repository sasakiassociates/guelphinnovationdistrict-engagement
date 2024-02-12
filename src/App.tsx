import { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { henshu, useHenshu } from '@strategies/henshu';
import { WatchAnchors } from '@strategies/react-anchors';
import ReactMobilized from '@strategies/react-mobilized';

import './App.scss';

import { ContextData, Context } from './context';
import { ENGAGEMENT_LINK, MENU, MOBILE_BREAKPOINT } from './config';
import Contact from './components/Contact/Contact';
import Process from './components/Process/Process';
import Resources from './components/Resources/Resources';
import Vision from './components/Vision/Vision';
import Welcome from './components/Welcome/Welcome';
import ArrowIcon from './assets/arrow-brand.svg';
import Logo from './assets/Fusion_Logos_Primary_Tagline_GoldWhite_OnNavy_CMYK_Primary_Tagline_GoldWhite_OnNavy.png';
import FooterLogo from './assets/Fusion_Logos_Primary_Tagline_GoldWhite_OnNavy_CMYK_Primary_Tagline_GoldWhite_OnNavy.png';
import Team from './components/Team/Team';
import MapSequence from './components/MapSequence/MapSequence';
import { Body, IconButton, Modal } from '@strategies/ui';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

// import { useHenshuApp } from '@strategies/henshu-app';


export default observer(function App() {
    const { bindTo } = useHenshu();
    // const { isEditing } = useHenshuApp();
    const [data, setData] = useState<ContextData>({ map: 0, section: 0 });
    const update = useCallback((changes: ContextData) => setData({ ...data, ...changes }), [data, setData]);
    const [modal, setModal] = useState<string | undefined>();
    const { map, section } = data;

    const context = { ...data, update };

    return (
        <div className="App">
            <ReactMobilized
                anchors={MENU}
                customAnchor={(anchor:any)=>{
                    if (anchor.href) {
                        return <a className="button" onClick={(e:any)=>e.prevendDefault()} href={anchor.href} >{anchor.text}</a>
                    } else {
                        return <></>
                    }
                }}
                logo={<><img src={Logo} alt="Logo" />
                </>}
                banner={<henshu.a href={ENGAGEMENT_LINK} {...bindTo('engage.banner')} />}
                breakpoint={MOBILE_BREAKPOINT}
                section={section! + 1}
                setCurrentSection={(n: number) => update({ section: n - 1 })}
                
            >
                <Context.Provider value={context}>
                    <WatchAnchors>
                        <MapSequence />
                        <Welcome />
                        <Vision />
                        
                        <Process />
                        <Team />
                        <Contact />
                    </WatchAnchors>
                </Context.Provider>
                <Modal active={modal !== undefined} onClose={()=>setModal(undefined)}>
                    <Body>
                        <henshu.richtext {...bindTo(`engage.modal.${modal}`)} /> 
                    </Body>
                    
                </Modal>
                <footer>
                    <div className="logo">
                        <img src={FooterLogo} alt="Logo" />
                        {/* <henshu.h3 {...bindTo('engage.landing.subheader')} /> */}

                        <div className='social-icons'>
                            <a className="button" onClick={(e:any)=>e.prevendDefault()} href={bindTo(`engage.sociallink.facebook`).get()} target='_blank' rel='noreferrer noopener'>
                                <IconButton>
                                    <FaFacebookSquare />
                                </IconButton>
                            </a>
                            
                            <a className="button" onClick={(e:any)=>e.prevendDefault()} href={bindTo(`engage.sociallink.instagram`).get()} target='_blank' rel='noreferrer noopener'>
                            <IconButton>
                                <BsInstagram />
                            </IconButton>
                            </a>
                            

                            <a className="button" onClick={(e:any)=>e.prevendDefault()} href={bindTo(`engage.sociallink.twitter`).get()} target='_blank' rel='noreferrer noopener'>
                            <IconButton>
                                <BsTwitter />

                            </IconButton>
                            </a>
                            



                            <a className="button" onClick={(e:any)=>e.prevendDefault()} href={bindTo(`engage.sociallink.linkdin`).get()} target='_blank' rel='noreferrer noopener'>
                            <IconButton>

                                <FaLinkedin />

                            </IconButton>
                            </a>
                            




                            <a className="button" onClick={(e:any)=>e.prevendDefault()} href={bindTo(`engage.sociallink.youtube`).get()} target='_blank' rel='noreferrer noopener'>
                            <IconButton>
                                <FaYoutube />
                            </IconButton>
                            </a>
                            


                            
                            

                            

                        </div>
                        
                            
                    </div>


                    <div className='policy-links'>

                    

                        <henshu.button
                            className="modal-action"
                            {...bindTo('engage.button.privacy')}
                            onClick={()=>setModal("privacy")}
                        />
                        |
                        <henshu.button
                            className="modal-action"
                            {...bindTo('engage.button.accessibility')}
                            onClick={()=>setModal("accessibility")}
                        />
                        {/* <henshu.a
                            className="button"
                            href={'https://fusionhomes.com/register/'}
                            {...bindTo('engage.button.register')}
                            target='_blank' rel='noreferrer noopener'
                        /> */}
                    </div>

                    <button className='arrow-button' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                        <img src={ArrowIcon} alt="Back to top" />
                    </button>
                </footer>
            </ReactMobilized>
        </div>
    );
});
