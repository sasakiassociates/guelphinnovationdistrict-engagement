import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { henshu, useHenshu } from '@strategies/henshu';
import { FORMSPREE_URL } from '../../config';


const OPTIONS = [
    'Local Resident',
    'Local Employee',
    'Business Owner',
    'Student',
    'Other'
];

export default observer(function ContactForm() {
    const { bindTo } = useHenshu();
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const submitForm = useCallback(e => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus("ERROR");
            }

            setSubmitting(false);
        };
        xhr.send(data);
    }, []);

    return (
        <div className="ContactForm">
            <form
                className={submitting ? 'disabled' : ''}
                onSubmit={submitForm}
                action={FORMSPREE_URL}
                method="POST"
                onInvalid={()=>setSubmitting(false)}
            >
                <div className="TextInput">
                    <henshu.label htmlFor="name" {...bindTo('engage.Contact.prompt.name')} />
                    <input id="name" type="text" name="name" placeholder="Type Name Here ..." />
                </div>

                <div className="TextInput">
                    <henshu.label htmlFor="role" {...bindTo('engage.Contact.prompt.role')} />

                    <div className="SelectInput">
                        <select id="role" name="role" defaultValue={'unspecified'}>
                            <option value="unspecified" disabled>Please select an option</option>
                            {OPTIONS.map(who => <option key={who} value={who}>{who}</option>)}
                        </select>
                    </div>
                </div>

                <div className="TextInput">
                    <henshu.label htmlFor="email" {...bindTo('engage.Contact.prompt.email')} />
                    <input id="email" type="email" name="email" placeholder="Type Email Here ..." />
                </div>

                <div className="TextAreaInput">
                    <henshu.label htmlFor="email" {...bindTo('engage.Contact.prompt.message')} />
                    <textarea id="message" name="message" placeholder="What do you want to share?" />
                </div>


                <div className="disclaimer">
                    <henshu.label htmlFor="name" {...bindTo('engage.Contact.prompt.disclaimer')} />
                </div>
                {status === "SUCCESS" ? (
                    <henshu.p {...bindTo('engage.Contact.thanks')} />
                ) : (
                    <henshu.button
                        className="with-arrow blue"
                        onClick={() => setSubmitting(true)}
                        {...bindTo('engage.Contact.submit')}
                    />
                )}
                
                {status === "ERROR" && <henshu.p {...bindTo('engage.Contact.error')} />}
            </form>
        </div>
    );
});
