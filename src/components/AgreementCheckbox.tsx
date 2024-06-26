'use client'; // For Client Components

import React, { useState } from 'react';
import Link from 'next/link';

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
        <div className="checkbox-container">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                id="tocAgreement"
            />
            <label className="ml-2" htmlFor="tocAgreement">
                I agree to the <Link className="nav-link" href="/terms">Terms of Conditions</Link>
            </label>
        </div>
    );
};

export default AgreementCheckbox;

