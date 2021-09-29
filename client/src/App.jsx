import React, { useState } from 'react';
import { convertNumber } from './api';

const App = () => {
    const [ entry, setEntry ] = useState('');
    const handleChange = event => setEntry(event.target.value);

    const targets = ['arabic', 'roman'];
    const [ target, setTarget ] = useState(targets[0]);
    const [ source, setSource ] = useState(targets[1]);

    const switchTargetAndSource = () => {
        const [ copieTarget, copieSource ] = [ target, source ];
        setTarget(copieSource);
        setSource(copieTarget);
    }

    const [ result, setResult ] = useState(null);
    const convertEntry = () => {
        const options = {
            source,
            target,
            value: entry
        };

        convertNumber(options)
            .then(result => setResult((JSON.parse(result))[target]))
            .catch(error => console.log('error', error));
    };

    return (
        <div className="h-screen bg-gray-800 text-white flex items-center justify-center p-6">
            <div className="w-full max-w-screen-md bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center">
                    <input
                        value={entry}
                        type="text"
                        className="w-1/2 rounded-sm px-5 py-3 outline-none bg-gray-800 font-mono text-sm text-gray-300 border-2 border-gray-600 focus:border-gray-600"
                        onChange={handleChange}
                    />
                    <div className="w-1/2 flex items-center justify-end pl-8">
                        <div className="w-1/2 px-3 md:text-sm text-xs text-gray-300 py-3 font-mono tracking-wider rounded-full bg-gray-800 font-mono border-2 border-gray-600 text-center select-none">
                            { source }
                        </div>
                        <div
                            className="text-center text-blue-500 bg-gray-800 md:mx-4 mx-2 rounded-full border-2 border-gray-600 hover:border-blue-500 p-2 cursor-pointer transition-colors"
                            onClick={switchTargetAndSource}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                            </svg>
                        </div>
                        <div className="w-1/2 px-3 md:text-sm text-xs text-gray-300 py-3 font-mono tracking-wider rounded-full bg-gray-800 font-mono border-2 border-gray-600 text-center select-none">
                            { target }
                        </div>
                    </div>
                </div>
                <div className={`mt-8 flex items-center ${ result ? 'justify-between' : 'justify-end' }`}>
                    {
                        result !== null &&
                        <div className="w-4 font-semibold">
                            { result }
                        </div>
                    }
                    <div
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors select-none"
                        onClick={convertEntry}
                    >
                        Convertir
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
