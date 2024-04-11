"use client"
import {FC, useRef, useState} from "react";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Page: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const markdown = '**Pan**, ucitel *lol!*'

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    const [isDivVisible, setIsDivVisible] = useState(false);

    const [firstButtonIcon, setFirstButtonIcon] = useState(faAnglesRight);

    const toggleDivVisibility = () => {
        setIsDivVisible(prev => !prev);
        setFirstButtonIcon(prevIcon => (prevIcon === faAnglesLeft ? faAnglesRight : faAnglesLeft));
    };


    return (
        <div className="flex flex-row h-screen">

            <div className="flex flex-col pt-[10px] pb-[10px] border-r-[2px] border-[#F5F5F4] h-screen justify-between">
                <div className="w-[82px] h-[224px] flex flex-col justify-evenly">
                    <button
                        className={`h-[64px] ${isHovered4 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        <FontAwesomeIcon className="h-[24px] w-[27px] text-[#37352F]" icon={faHouse}/>
                    </button>
                    <button
                        className={`h-[64px] ${isHovered5 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}
                    >
                        <FontAwesomeIcon className="text-[#000000] h-[24px] w-[21px]" icon={faBook}/>
                    </button>
                    <button
                        className={`h-[64px] ${isHovered6 ? 'bg-gray-200' : ''}`}
                        onMouseEnter={() => setIsHovered6(true)}
                        onMouseLeave={() => setIsHovered6(false)}
                    >
                        <FontAwesomeIcon className="text-[#37352F] h-[24px] w-[22,63px]" icon={faGear}/>
                    </button>
                </div>

                <div className="">
                    <button className="h-[64px] w-[82px]" onClick={toggleDivVisibility}><FontAwesomeIcon
                        className="text-[#37352F] h-[24px] w-[25,99px]" icon={firstButtonIcon}/></button>
                </div>
            </div>

            {isDivVisible && (
                <div
                    className="border-[#EDEDF0] border-r-[3px] w-[250px] pt-[24px] pb-[24px] flex flex-col space-y-[5px]">
                    <div>
                        <div className={`flex flex-row justify-between items-center ${isHovered1 ? 'bg-gray-200' : ''}`}
                             onMouseEnter={() => setIsHovered1(true)}
                             onMouseLeave={() => setIsHovered1(false)}
                        >
                            <button className="pt-[24px] pb-[24px] ml-[10px]">
                                <FontAwesomeIcon className="text-[#37352F] h-[16px] w-[12px]" icon={faFile}/>
                            </button>

                        <h1 className="content-center w-full ml-[10px]">I4 HS</h1>

                        <Popup
                            trigger={
                                <button className="pt-[24px] pb-[24px] mr-[10px] relative">
                                    <FontAwesomeIcon
                                        className={`text-[#37352F] ${isHovered1 ? 'visible' : 'invisible'}`}
                                        icon={faX}/>
                                </button>
                            }
                            modal
                            nested
                        >
                            {close => (
                                <div
                                    className="w-[503px] h-[188px] flex flex-col content-center justify-center pl-[20px] pr-[20px]">
                                    <div
                                        className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]">
                                        Opravdu chcete smazat poznámku?
                                    </div>
                                    <div className="flex flex-row">
                                        <div>
                                            <button className="bg-green-500 w-[39px] h-[31px] rounded-lg"
                                                    onClick={close}>
                                                Ano
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-red-600 w-[39px] h-[31px] rounded-lg" onClick={close}>
                                                Ne
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>

                    <div>
                        <div className={`flex flex-row justify-between items-center ${isHovered2 ? 'bg-gray-200' : ''}`}
                             onMouseEnter={() => setIsHovered2(true)}
                             onMouseLeave={() => setIsHovered2(false)}
                        >
                            <button className="pt-[24px] pb-[24px] ml-[10px]">
                                <FontAwesomeIcon className="text-[#37352F] h-[16px] w-[12px]" icon={faFile}/>
                            </button>

                            <h1 className="content-center w-full ml-[10px]">I3 HS</h1>

                            <button
                                className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered2 ? 'visible' : 'invisible'}`}>
                                <FontAwesomeIcon className="text-[#37352F]" icon={faX}/>
                            </button>
                        </div>

                        <div className={`flex flex-row justify-between items-center ${isHovered3 ? 'bg-gray-200' : ''}`}
                             onMouseEnter={() => setIsHovered3(true)}
                             onMouseLeave={() => setIsHovered3(false)}
                        >
                            <button className="pt-[24px] pb-[24px] ml-[10px]">
                                <FontAwesomeIcon className="text-[#37352F]" icon={faFile}/>
                            </button>

                            <h1 className="content-center w-full ml-[10px]">I2 HS</h1>

                            <button
                                className={`pt-[24px] pb-[24px] mr-[10px] relative ${isHovered3 ? 'visible' : 'invisible'}`}>
                                <FontAwesomeIcon className="text-[#37352F]" icon={faX}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}

            <div className="flex flex-col w-screen pt-[6px] pb-[12px]">
                <div
                    className="border-b-[1px] flex flex-row border-[#F5F5F4] justify-between pt-[12px] pl-[36px] pr-[12px] pb-[36px] w-full h-[41px]">
                    <h1 className="font-[600] text-[14px] leading-[16,94px] text-[#191711]">I4 HS</h1>
                    <div className="justify-between space-x-[20px] mr-[20px]">
                        <button className=""><FontAwesomeIcon className="text-[#37352F] pr-2 w-[16px] h-[16px]"
                                                              icon={faPrint}/></button>
                        <button className=""><FontAwesomeIcon className="text-[#37352F] w-[16px] h-[16px]"
                                                              icon={faLink}/></button>
                    </div>
                </div>


                <div className="flex flex-col w-[708px] h-[911px] ml-[250px] mt-[50px]">
                    <h1 className="font-[700] w-[708px]  border-b-[1px] border-[#EDEDF0] pt-[12px] pb-[12px] text-[40px] leading-[48,41px] text-[#000000]">I4
                        HS</h1>
                    <h1 className="font-[600] w-[708px]  pt-[36px] pb-[8px] text-[30px] leading-[36,31px] text-[#37352F]">Dynamický
                        routing</h1>
                    <h1 className="font-[400] w-[708px]  pt-[4px] pb-[4px] text-[16px] leading-[24px] text-[#37352F]">Dynamický
                        routing nám zajišťuje routovací infrastrukturu, do které nemusíme zasahovat. Nemusíme psát
                        routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen nastavit.</h1>

                    <ul className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]"> Kromě
                        funkcí routingu nám DRP poskytují:
                        <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                            Škálovatelnost</li>
                        <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                            Rychlou konvergenci
                        </li>
                        <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                            Dostupnost
                        </li>
                    </ul>

                    <h1 className="font-[600] w-[708px]  pt-[36px] pb-[8px] text-[30px] leading-[36,31px] text-[#37352F]">Charekteristika
                        DRP</h1>
                    <div>
                        <h1 className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]"> O
                            každém dynamickém routovacím protokolu můžeme říct, že má minimálně:</h1>
                    </div>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                        Algoritmus</p>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                        Metriku</p>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">•
                        Zprávy daného protokolu</p>
                    <Markdown>{markdown}</Markdown>
                </div>

            </div>



        </div>
    );
}

export default Page;