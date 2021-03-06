import React from "react";
import s from "./Logo.module.css";

export const Logo = () => {
    return(
        <div className={s.logo}>
            <svg className={s.header__image} version="1.0" xmlns="http://www.w3.org/2000/svg"
                 height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                 preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                   stroke="none">
                    <path d="M1534 4396 c-161 -31 -269 -74 -398 -160 -93 -62 -223 -192 -286
                        -285 -231 -344 -237 -800 -15 -1156 25 -41 50 -77 54 -80 5 -2 51 15 102 39
                        113 53 247 97 389 128 89 19 137 22 315 22 179 1 226 -2 321 -22 139 -28 272
                        -71 394 -128 l94 -45 18 23 c10 13 36 52 57 88 167 281 193 621 71 937 -90
                        234 -303 458 -535 563 -166 76 -414 108 -581 76z"/>
                    <path d="M3609 4315 c-81 -16 -183 -56 -263 -103 -82 -48 -208 -171 -267 -261
                        -160 -245 -182 -571 -54 -833 l37 -76 107 53 c326 163 683 188 1026 74 66 -22
                        157 -60 202 -84 l82 -45 35 73 c64 132 81 213 80 377 -1 127 -4 156 -27 233
                        -46 149 -112 260 -217 366 -118 117 -286 205 -442 231 -84 13 -218 11 -299 -5z"/>
                    <path d="M3604 2930 c-278 -39 -533 -157 -736 -340 l-57 -51 102 -77 c56 -42
                        156 -131 223 -197 255 -254 415 -523 494 -833 l11 -43 607 3 607 3 57 27 c154
                        72 227 214 199 385 -18 113 -73 271 -137 393 -194 373 -532 628 -949 715 -92
                        19 -331 28 -421 15z"/>
                    <path d="M1490 2600 c-731 -100 -1315 -644 -1471 -1371 -27 -128 -22 -205 20
                        -295 54 -116 156 -197 279 -223 75 -16 2689 -16 2764 0 161 34 281 160 310
                        327 14 85 -4 195 -63 375 -195 599 -683 1036 -1304 1167 -113 24 -421 35 -535
                        20z"/>
                </g>
            </svg>
        </div>
    )
}