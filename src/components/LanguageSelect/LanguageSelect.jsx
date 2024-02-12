import { observer } from 'mobx-react';
import { useHenshuApp } from '@strategies/henshu-app';


export default observer(function LanguageSelect() {
    const app = useHenshuApp();

    return (
        <span className="LanguageSelect">
            <select value={app.lang} onChange={e => app.setLang(e.currentTarget.value)}>
                {[...app.langs].sort().map(lang => (
                    <option value={lang}>{lang.toUpperCase()}</option>
                ))}
            </select>
        </span>
    );
});
