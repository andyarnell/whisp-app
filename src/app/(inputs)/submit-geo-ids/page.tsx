'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store';
import ErrorAlert from '@/components/ErrorBar';
import { Tabs } from '@/components/Tabs';
import { Buttons } from '@/components/Buttons';
import Image from 'next/image';
import AgreementCheckbox from '@/components/AgreementCheckbox';
import { downloadSampleDocument } from '@/utils/downloadSampleDocument';

const GeoIdInput: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const { error, geoIds } = useStore();

    const setGeoIds = (newGeoIds: string[]) => {
        useStore.setState({ geoIds: newGeoIds });
    };

    const router = useRouter();

    useEffect(() => {
        const hasGeoIds = geoIds?.some(geoId => geoId.trim() !== '');
        setIsDisabled(!(agreedTerms && hasGeoIds))
    }, [geoIds, agreedTerms])

    const analyze = async () => {
        setIsLoading(true)
        useStore.setState({ error: '' });

        if (geoIds) {
            if (!geoIds.some(geoId => geoId.trim() !== '')) {
                useStore.setState({ error: 'Please enter at least one Geo ID or upload a file.' });
            } else {
                const cleanGeoIds = geoIds.filter(geoId => geoId.trim() !== '');
                try {
                    const response = await fetch('/api/geo-ids', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ geoIds: cleanGeoIds }),
                    });

                    const data = await response.json();

                    if (!data) {
                        throw new Error(`No response from the server`);
                    }

                    if (!response.ok && data['error']) {
                        throw new Error(`${data['error']}`);
                    }

                    if (!response.ok) {
                        throw new Error(`Server error with status ${response.status}`);
                    }

                    if (data) {
                        useStore.setState({ token: data.token, data: data.data, shpBase64: data.plotFileBase64, selectedFile: "" });
                        router.push(`/results/${data.token}`);
                    }
                } catch (error: any) {
                    useStore.setState({ error: error.message });
                    setIsLoading(false); // Stop loading on error
                }
            }
        }

    };

    const clearInput = () => {
        setGeoIds(['']);
        useStore.setState({ error: "", geoIds: [""], isDisabled: true, selectedFile: "" });
    };

    const handleAgreementChange = (agreed: boolean) => {
        setAgreedTerms(agreed);
    }

    const renderExampleButton = () => (
        <button
            onClick={() => { downloadSampleDocument('/civ_plot.json') }}
            className="flex mt-2 items-center justify-center w-28 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            <Image
                className='mr-2'
                onClick={() => useStore.setState({ error: '' })}
                src="/download-outline.svg"
                alt="download-outline"
                width={20}
                height={20}
            />
            Example
        </button>
    )


    return (
        <div className="md:max-w-2xl p-5 border border-gray-300 bg-gray-800 rounded shadow-md mx-auto my-4 relative">
            {isLoading && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-10">
                    <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
                </div>
            )}
            <h1 className="text-2xl font-semibold text-center mb-4">Submit Geo IDs</h1>
            {error && <ErrorAlert />}
            <Tabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="flex items-center mx-2 justify-between">
                {renderExampleButton()}
            </div>
            <div className="flex items-center mx-2 justify-between">
                <AgreementCheckbox onAgreementChange={handleAgreementChange} />
                <Buttons clearInput={clearInput} analyze={analyze} isDisabled={isDisabled} />
            </div>
        </div>
    );
};

export default GeoIdInput
