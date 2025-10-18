"use client"

import React from "react"
import BadgeIcon from "./BadgeIcon"

export default function SkillSection(){

    return(
        <div>
            <div className="mt-6">
                <h2 className="font-semibold mb-3">Tools and Tech Skills</h2>
                <div className="flex flex-wrap gap-3">
                <BadgeIcon 
                icon={<img src="/FigmaIcon.svg" alt="Figma" className="w-4 h-4"/>}
                label="Figma"/>
                <BadgeIcon 
                icon={<img src="/AdobeIllustrator.svg" alt="AdobeIllustrator" className="w-4 h-4"/>}
                label="Adobe Illustrator"/>
                <BadgeIcon 
                icon={<img src="/HTML.svg" alt="HTML" className="w-4 h-4"/>}
                label="HTML"/>
                <BadgeIcon 
                icon={<img src="/JavaScripts.svg" alt="JavaScript" className="w-4 h-4"/>}
                label="JavaScript"/>
                <BadgeIcon 
                icon={<img src="/Python.svg" alt="Python" className="w-4 h-4"/>}
                label="Python"/>
                <BadgeIcon 
                icon={<img src="/PowerBI.svg" alt="Power BI" className="w-4 h-4"/>}
                label="Power BI"/>
                <BadgeIcon 
                icon={<img src="/MySQL.svg" alt="MySQL" className="w-4 h-4"/>}
                label="MySQL"/>
                <BadgeIcon 
                icon={<img src="/React.svg" alt="React" className="w-4 h-4"/>}
                label="React"/>
                <BadgeIcon 
                icon={<img src="/CSS.svg" alt="CSS" className="w-4 h-4"/>}
                label="CSS"/>
                <BadgeIcon 
                icon={<img src="/Excel.svg" alt="CSS" className="w-4 h-4"/>}
                label="Excel"
                />
                <BadgeIcon 
                icon={<img src="/Word.svg" alt="CSS" className="w-4 h-4"/>}
                label="Word"
                />
                <BadgeIcon 
                icon={<img src="/PowerPoint.svg" alt="CSS" className="w-4 h-4"/>}
                label="PowerPoint"
                />
                </div>
            </div>
    
            <div className="mt-6">
                <h2 className="font-semibold mb-3">Soft Skills</h2>
                <div className="flex flex-wrap gap-3">
                <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">UI Design</span>
                <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">UX Design</span>
                <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Design Systems</span>
                <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Prototyping</span>
                <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Design Thinking</span>
                </div>
            </div>
        </div>
    )
}