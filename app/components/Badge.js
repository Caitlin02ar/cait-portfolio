"use client";

import { useEffect } from "react";

export default function Badge({ text }) {
    return(
        <div className="mb-4">
            <span className="px-4 py-1 text-sm rounded-full border border-gray-300">
                {text}
            </span>
        </div>
    );
}