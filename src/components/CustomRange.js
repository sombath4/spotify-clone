import React from 'react'
import { Range, getTrackBackground } from "react-range"

export default function CustomRange({value, step, min, max, onChange }) {
    return (
        <Range
            values={[value]}
            step={step}
            min={min}
            max={max || 1}
            onChange={values => onChange(values[0])}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className='w-full h-7 flex group'
                    style={props.style}
                >
                    <div
                        ref={props.ref}
                        className="h-1 w-full rounded-md self-center"
                        style={{
                            background: getTrackBackground({
                                values: [value],
                                colors: ["#1db954", "#535353"],
                                min,
                                max
                            }),
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div className={`w-3 h-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
                    {...props}
                    style={{
                        ...props.style,
                        boxShadow: "0px 2px 4px 0 rgba(0 0 0 / 50%)"
                    }}
                />
            )}
        />
    )
}