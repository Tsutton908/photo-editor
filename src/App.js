import React, { useState } from 'react';

import './components/main.css';
import Slider from './components/Slider';
import SidebarItem from './components/SidebarItem';

const DEAFULT_OPTIONS =[
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    }
];

function App() {

        const [option, setOptions] = useState(DEAFULT_OPTIONS);
        const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
        const selectedOption = option[selectedOptionIndex];

        function handleSliderChange({ target }) {
            setOptions(prevOptions => {
                return prevOptions.map((option, index) => {
                    if (index !== selectedOptionIndex) {
                        return option;
                    }
                    return { ...option, value: target.value};
                });
            })
        };

        function getImageStyle() {
            const filters = option.map(option => {
                return `${option.property}(${option.value}${option.unit})`
            });

            return { filter: filters.join(' ') };
        }
        console.log(getImageStyle());

        return (
            <div className="container">
                <image className="main-image" style={getImageStyle()}></image>
                <div className="sidebar">
                    {option.map((option, index) => {
                        return (
                        <SidebarItem
                            key={index}
                            name={option.name}
                            active = {index === selectedOptionIndex}
                            handleClick={() => setSelectedOptionIndex(index)}
                        />
                        )
                    })}
                </div>
                <Slider 
                    min={selectedOption.range.min}
                    max={selectedOption.range.max}
                    value={selectedOption.value}
                    handleChange={handleSliderChange}
                />
            </div>
        );
    
}

export default App;