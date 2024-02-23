import { useState, useEffect } from 'react';

import './divinationTypeSelect.scss';

function DivinationTypeSelect({ onDivinationTypeChange }) {

    const handleDivinationTypeChange = (event) => {
        onDivinationTypeChange(event.target.value);
    }

    return (
        <div className='divination-type'>
            <select onChange={handleDivinationTypeChange}>
                <option value="personal">Osobní život</option>
                <option value="work">Práce</option>
                <option value="love">Láska</option>
                <option value="money">Finance</option>
                <option value="health">Zdraví</option>
                <option value="family">Rodina</option>
                <option value="sex">Sexualita</option>
            </select>
        </div>
    );
}

export default DivinationTypeSelect;