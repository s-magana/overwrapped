import { useRef } from "react";

export default function Dropdown({ options, sortValue }) {
    const selectRef = useRef();
    return (
        <>
            <div> 
                <select
                    className="dropdown-btn ms-3 mt-4 main-font"
                    ref={selectRef}
                    onChange={e => {
                        sortValue(e.target.value);
                    }}>
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}