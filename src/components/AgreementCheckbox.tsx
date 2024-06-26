'use client';
import React, { useState } from 'react';

interface CheckboxProps {
    onAgreementChange: (agreed: boolean) => void;
}

const AgreementCheckbox: React.FC<CheckboxProps> = ({ onAgreementChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onAgreementChange(!isChecked);
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleChange} className="mr-1" />
            I agree to the <a className="nav-link" href="/terms" target="_blank" rel="noopener noreferrer">Terms of Conditions</a>
        </label>
    );
};

export default AgreementCheckbox;

