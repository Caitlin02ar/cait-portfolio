"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({
    text = "Hi! I’m Caitlin",
    speed = 100,
    pause = 2000,
    className = "",
    }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (!isDeleting && displayedText.length < text.length) {
        timeout = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
        } else if (isDeleting && displayedText.length > 0) {
        
        timeout = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length - 1));
        }, speed / 2);
        } else if (displayedText.length === text.length) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (displayedText.length === 0 && isDeleting) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, text, speed, pause]);

    return (
        <h1 className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </h1>
    );
}
