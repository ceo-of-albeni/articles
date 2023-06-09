import "./reviewer.css";

export default function Reviewer() {
    return (
        <>
            <section className="reviewer_section">
                <div className="bgi">
                    <svg width="1353" height="630" viewBox="0 0 1353 630" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M742 535.27C940.883 535.27 1077.34 644.011 1251.27 535.27C1425.2 426.529 1042.09 698.385 1251.27 577.171" stroke="#C77C25" stroke-width="2"/>
                        <path d="M754 555.27C952.883 555.27 1089.34 664.011 1263.27 555.27C1437.2 446.529 1054.09 718.385 1263.27 597.171" stroke="#400E59" stroke-width="2"/>
                        <path d="M1 430C1 430 313.424 274.515 577.902 61.0347C842.38 -152.445 523.769 430 523.769 430C523.769 430 865.58 290.013 1034.17 88.0322C1202.75 -113.949 973.846 395.003 973.846 395.003C973.846 395.003 1364.38 371.505 1280.08 201.022" stroke="black"/>
                        <path d="M61 432C61 432 373.424 276.515 637.902 63.0347C902.38 -150.445 583.769 432 583.769 432C583.769 432 925.58 292.013 1094.17 90.0322C1262.75 -111.949 1033.85 397.003 1033.85 397.003C1033.85 397.003 1424.38 373.505 1340.08 203.022" stroke="#3B7197"/>
                        <path d="M1314 219L1333.05 249.75H1294.95L1314 219Z" fill="#9E81AD"/>
                        <rect x="298.204" y="203.912" width="48.6728" height="48.2995" transform="rotate(43.5521 298.204 203.912)" fill="white"/>
                        <rect x="298.221" y="204.619" width="47.6728" height="47.2995" transform="rotate(43.5521 298.221 204.619)" stroke="black" stroke-opacity="0.68"/>
                        <line x1="333.354" y1="201.354" x2="259.354" y2="275.354" stroke="white"/>
                        <line x1="261.346" y1="200.639" x2="336.951" y2="272.998" stroke="black"/>
                    </svg>
                </div>
                <div className="reviewer_thema">
                    <p className="upper ">CREATIVITY IS CONTAGIOUS,</p> <p className="lower">pass it on</p> 
                </div>
                <div className="reviewer_user">
                    <div className="user_logo">
                        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.5 57.5C49.6625 57.5 42.9531 54.7094 37.3719 49.1281C31.7906 43.5469 29 36.8375 29 29C29 21.1625 31.7906 14.4531 37.3719 8.87188C42.9531 3.29063 49.6625 0.5 57.5 0.5C65.3375 0.5 72.0469 3.29063 77.6281 8.87188C83.2094 14.4531 86 21.1625 86 29C86 36.8375 83.2094 43.5469 77.6281 49.1281C72.0469 54.7094 65.3375 57.5 57.5 57.5ZM0.5 114.5V94.55C0.5 90.5125 1.54025 86.8004 3.62075 83.4136C5.70125 80.0269 8.461 77.4453 11.9 75.6688C19.2625 71.9875 26.7437 69.2254 34.3438 67.3824C41.9438 65.5394 49.6625 64.6202 57.5 64.625C65.3375 64.625 73.0563 65.5465 80.6562 67.3895C88.2562 69.2325 95.7375 71.9922 103.1 75.6688C106.544 77.45 109.306 80.034 111.386 83.4207C113.467 86.8075 114.505 90.5173 114.5 94.55V114.5H0.5Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="user_data">
                        <p>First name:</p>
                        <p>Last name:</p>
                        <p>Email:</p>
                    </div>
                </div>
                <div className="button_publish">
                    <button>
                        Publish
                    </button>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>#</th>
                            <td>Publication title </td>
                            <td>Updated</td>
                            <td>Status</td>
                            <td>Accept</td>
                            <td>Reject</td>
                            <td>Submit</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt; </td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8H18C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C12.43 2 12.86 2.05 13.27 2.14L14.88 0.54C13.96 0.18 13 0 12 0ZM18.59 1.58L12 8.17L9.62 5.79L8.21 7.21L12 11L20 3M2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="#16BA4E"/>
                                </svg>
                            </td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                                </svg>
                            </td>
                            <td>#</td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                                </svg>
                            </td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td>#</td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td>#</td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td>#</td>
                            <td><button>submit</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress &gt;</td>
                            <td></td>
                            <td></td>
                            <td>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.87827 0 7.84344 0.842855 6.34315 2.34315C4.84285 3.84344 4 5.87827 4 8C4 10.1217 4.84285 12.1566 6.34315 13.6569C7.84344 15.1571 9.87827 16 12 16C14.1217 16 16.1566 15.1571 17.6569 13.6569C19.1571 12.1566 20 10.1217 20 8C20 5.87827 19.1571 3.84344 17.6569 2.34315C16.1566 0.842855 14.1217 0 12 0ZM12 2C15.32 2 18 4.69 18 8C18 11.32 15.32 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM2.93 3.82C2.01572 4.56996 1.27883 5.51305 0.772242 6.58156C0.265651 7.65006 0.00192585 8.81748 0 10C0 12.1217 0.842855 14.1566 2.34315 15.6569C3.84344 17.1571 5.87827 18 8 18C8.64 18 9.27 17.92 9.88 17.77C8.12 17.38 6.5 16.5 5.17 15.29C4.21237 14.7776 3.41174 14.015 2.85347 13.0834C2.2952 12.1517 2.00023 11.0861 2 10C2 9.7 2.03 9.41 2.07 9.11C2.03 8.74 2 8.37 2 8C2 6.56 2.32 5.13 2.93 3.82Z" fill="black"/>
                            </svg>
                            </td>
                            <td>#</td>
                            <td><button>submit</button></td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}