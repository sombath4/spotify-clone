import React from 'react'

export default function Playlists() {
    return (
        <div className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20">
            <ul>
                {new Array(40).fill(
                    <li>
                        <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                            22.Calma Listem
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}
