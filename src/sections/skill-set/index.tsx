import { PureComponent } from "react";

import PrintSkills from "./PrintSkills";

export default class extends PureComponent {
    /*
        Every group is a object {} inside the array skillSetData
        Group has title and skills which is an array of objects [{}, {}, {}], every object is a specific skill
        knowledge in skill is:
            0: BASIC
            1: Intermedium
            2: ADVANCED
    */
    state = {
        skillSetData: [
            {
                title: "Organization, planning, design",
                skills: [
                    {
                        icon: "/static/icons/skills/notion.svg",
                        name: "Notion (SCRUM - Kanban)",
                        knowledge: 1
                    },
                    {
                        icon: "/static/icons/skills/adobexd.svg",
                        name: "Adobe Xd",
                        knowledge: 1
                    },
                    {
                        icon: "/static/icons/skills/figma.svg",
                        name: "Figma",
                        knowledge: 1
                    },
                    {
                        icon: "/static/icons/skills/framer.svg",
                        name: "Framer",
                        knowledge: 1
                    }
                ]
            },
            {
                title: "Base",
                skills: [
                    {
                        icon: "/static/icons/skills/html5.svg",
                        name: "HTML5",
                        knowledge: 2
                    }, 
                    {
                        icon: "/static/icons/skills/css3.svg",
                        name: "CSS3",
                        knowledge: 2
                    }, 
                    {
                        icon: "/static/icons/skills/javascript.svg",
                        name: "JavaScript",
                        knowledge: 2
                    }, 
                    {
                        icon: "/static/icons/skills/typescript.svg",
                        name: "TypeScript",
                        knowledge: 2
                    }
                ]
            },
            {
                title: "Libraries",
                skills: [
                    {
                        icon: "/static/icons/skills/reactjs.svg",
                        name: "ReactJS",
                        knowledge: 2
                    },
                    {
                        icon: "/static/icons/skills/redux.svg",
                        name: "Redux | React-Redux",
                        knowledge: 2
                    }
                ]
            },
            {
                title: "Superpowers",
                skills: [
                    {
                        icon: "/static/icons/skills/nextjs.svg",
                        name: "NextJS",
                        knowledge: 2
                    },
                    {
                        icon: "/static/icons/skills/sass.svg",
                        name: "SASS",
                        knowledge: 2
                    }
                ]
            },
            {
                title: "Version control",
                skills: [
                    {
                        icon: "/static/icons/github.svg",
                        name: "Git & GitHub",
                        knowledge: 2
                    }
                ]
            },
            {
                title: "Utilities",
                skills: [
                    {
                        icon: "/static/icons/skills/bem.svg",
                        name: "BEM Methodology",
                        knowledge: 2
                    },
                    {
                        icon: "/static/icons/skills/rest.svg",
                        name: "RESTfullAPIs",
                        knowledge: 1
                    },
                    {
                        icon: "/static/icons/skills/nodejs.svg",
                        name: "NodeJS",
                        knowledge: 0
                    },
                    {
                        icon: "/static/icons/skills/npm.svg",
                        name: "NPM",
                        knowledge: 0
                    },
                    {
                        icon: "/static/icons/skills/webpack.svg",
                        name: "Webpack",
                        knowledge: 0
                    },
                    {
                        icon: "/static/icons/skills/firebase.svg",
                        name: "Firebase",
                        knowledge: 1
                    },
                    {
                        icon: "/static/icons/skills/tailwindcss.svg",
                        name: "TailwindCSS",
                        knowledge: 2
                    },
                    {
                        icon: "/static/icons/skills/expressjs.svg",
                        name: "ExpressJS",
                        knowledge: 0
                    },
                    {
                        icon: "/static/icons/skills/socketio.svg",
                        name: "SocketIO",
                        knowledge: 0
                    }
                ]
            },
            {
                title: "Spoken languages",
                skills: [
                    {
                        icon: "/static/icons/colombia-flag.svg",
                        name: "Spanish (native)",
                        knowledge: 2
                    },
                    {
                        icon: "/static/icons/skills/english-language.svg",
                        name: "English (C2)",
                        knowledge: 2
                    }
                ]
            }
        ]
    };

    render () {
        const { skillSetData } = this.state;

        return (
            <div className="mx-4 my-24">
                <div className="flex space-x-2 mb-4">
                    <div className="border border-black px-2 bg-blueSky">
                        <p>BASIC</p>
                    </div>
                    <div className="border border-black px-2 bg-militar">
                        <p>INTERMEDIUM</p>
                    </div>
                    <div className="border border-black px-2 bg-terracotta">
                        <p>ADVANCED</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <PrintSkills skillSetData={skillSetData} />
                </div>
            </div>
        )
    }
}