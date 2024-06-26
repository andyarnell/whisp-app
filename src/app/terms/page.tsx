'use client'

import React from 'react';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Whisp Terms and Conditions</h1>
        {/* Definitions */}
        <h2 className="text-xl font-bold my-4">License</h2>
        <p>
          The Whisp API is licensed under the MIT License 2.0 (the "License"). You can obtain a copy of the License <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">here</a>. By using the API, you agree to comply with the terms of the License and our Terms of Service.
        </p>

        {/* Commercial Uses */}
        <h2 className="text-xl font-bold my-4">Commercial Uses</h2>
        <p>
          We are aware that you may use the API for commercial purposes under the MIT License. However, we do have some additional terms specific to commercial use:
        </p>
        <ul className="my-2">
          <li>
            <b>Attribution:</b> If you use the API in a commercial product or service, you must clearly display attribution to "Openforis.org and the WhispAPI" in your product or service documentation.
          </li>
          <li>
            <b>No Endorsement:</b> You may not imply or state that Openforis.org endorses your product or service by virtue of your use of the API.
          </li>
          <li>
            <b>Acceptable Use:</b> You agree to use the API in a manner that is consistent with all applicable laws and regulations and does not infringe on the rights of any third party. You will not use the API for any illegal or unethical purposes.
          </li>
        </ul>

        {/* Rate Limits and Availability */}
        <h2 className="text-xl font-bold my-4">Rate Limits and Availability</h2>
        <p>
          We may implement rate limits on your use of the API to ensure fair and equitable access for all users. We reserve the right to modify or discontinue the API at any time with or without notice.
        </p>

        {/* Data Usage and Privacy */}
        <h2 className="text-xl font-bold my-4">Data Usage and Privacy</h2>
        <p>
          We collect and process data as outlined in our Privacy Policy [link to Privacy Policy]. By using the API, you consent to the collection and use of your data as described in the Privacy Policy.
        </p>

        {/* Intellectual Property */}
        <h2 className="text-xl font-bold my-4">Intellectual Property</h2>
        <p>
          Open Foris Initiative retains all intellectual property rights to the API and any associated documentation. You are granted a limited, non-exclusive, non-transferable license to use the API in accordance with these Terms of Service.
        </p>

        {/* Disclaimer of Warranties */}
        <h2 className="text-xl font-bold my-4">Disclaimer of Warranties</h2>
        <p>
          The API is provided "as is" and without warranties of any kind, express or implied. We disclaim all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        {/* Limitation of Liability */}
        <h2 className="text-xl font-bold my-4">Limitation of Liability</h2>
        <p>
          We will not be liable for any damages arising out of your use of the API, including, but not limited to, direct, indirect, incidental, special, consequential, or punitive damages.
        </p>

        {/* Indemnification */}
        <h2 className="text-xl font-bold my-4">Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Open Foris Initiative from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the API or your breach of these Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default DocumentationPage;
