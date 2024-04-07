

/*.footer::before {*/
/*    position: absolute;*/
/*    content: '';*/
/*    top:0;*/
/*    width: 25px;*/
/*    height: 25px;*/
/*    border-top: 1px solid var(--main-color);*/
/*    border-right: 1px solid var(--main-color);*/
/*}*/

/*.footer::after {*/
/*    position: absolute;*/
/*    bottom: 0;*/
/*    content: '';*/
/*    width: 25px;*/
/*    height: 25px;*/
/*    border-bottom: 1px solid var(--main-color);*/
/*    border-left: 1px solid var(--main-color);*/
/*}*/

/*@media (max-width: 767px) {*/
/*general*/
/*_____________________*/
/*.header {*/
/*    display: grid;*/
/*    grid-template-rows: 33% 33% 33%;*/
/*    height: 100vh;*/
/*}*/

/*.rec {*/
/*    position: absolute;*/
/*    z-index: 1;*/
/*    display: flex;*/
/*    !*width: 52px;*!*/
/*    !*height: 26px;*!*/
/*    top: 21px;*/
/*    right: 48px;*/
/*    color: var(--rec-color);*/
/*    font-family: var(--font-name);*/
/*    font-size: var(--text-font-size);*/
/*    font-weight: var(--text-font-weight);*/
/*}*/

/*!*.rec::before {*!*/
/*!*    position: absolute;*!*/
/*!*    right: 15px;*!*/
/*!*    content: "REC";*!*/
/*!*    font-family: var(--font-name);*!*/
/*!*    font-size: var(--text-font-size);*!*/
/*!*    font-weight: var(--text-font-weight);*!*/
/*!*}*!*/

/*.rec::after {*/
/*    content: '';*/
/*    position: absolute;*/
/*    top: 7px;*/
/*    right: -19px;*/
/*    inline-size: 9px;*/
/*    block-size: 9px;*/
/*    border-radius: 50%;*/
/*    background: var(--rec-color);*/
/*    box-shadow: 0px 0px 4px 2px var(--rec-color);*/
/*}*/

/*.decorated-zone {*/
/*    position: relative;*/
/*    background-image: var(--background-image);*/
/*    background-repeat: no-repeat;*/
/*    background-position: center;*/
/*    background-size: cover;*/
/*}*/

/*.header__theme-menu {*/
/*    display: flex;*/
/*    align-items: center;*/
/*}*/

/*.header__theme-menu-list {*/
/*    display: flex;*/
/*    !*flex-direction: row;*!*/
/*    !*align-items: flex-start;*!*/
/*    !*margin-top: -188px;*!*/
/*    gap: 10px;*/
/*    !*width: 230px;*!*/
/*}*/
/*.header__theme-menu-button {*/
/*    color: var(--main-color);*/
/*    background-color: transparent;*/
/*    width: 70px;*/
/*    height: 26px;*/
/*    text-transform: lowercase;*/
/*    font-family: var(--font-name);*/
/*    font-size: var(--text-font-size);*/
/*    font-weight: var(--text-font-weight);*/
/*    line-height: 18px;*/
/*    text-align: center;*/
/*    border: none;*/
/*}*/

/*.header__theme-menu-button.header__theme-menu-button_active {*/
/*    pointer-events: none;*/
/*    border: 1px solid var(--main-color)*/
/*}*/

/*.header__theme-menu-button:focus-visible {*/
/*    outline: none;*/
/*    border-bottom: 1px solid var(--main-color);*/
/*}*/

/*.header__theme-menu-button:hover {*/
/*    outline: none;*/
/*    border: 1px solid var(--main-color-with-opacity);*/
/*}*/

/*.sub_header {*/
/*    color: var(--main-color);*/
/*    font-family: var(--font-name);*/
/*    font-size: var(--sub-header-font-size);*/
/*    font-weight: var(--sub-header-font-weight);*/
/*}*/

/*.title_decore {*/
/*    font-family: var(--font-name);*/
/*    background-color: var(--links-accent-color);*/
/*    color: var(--sub-header-color);*/
/*    font-size: var(--sub-header-font-size);*/
/*    font-weight: var(--sub-header-font-weight);*/
/*    text-align: left;*/
/*}*/

/*.h3 {*/
/*    font-family: var(--font-name);*/
/*    background-color: var(--links-accent-color);*/
/*    font-size: var(--sub-header-font-size);*/
/*    font-weight: var(--sub-header-font-weight);*/
/*    text-align: left;*/
/*    color: var(--sub-header-color);*/
/*}*/

/*.text {*/
/*    color: var(--text-color);*/
/*    font-family: var(--font-name);*/
/*    font-size: var(--text-font-size);*/
/*    font-weight: var(--text-font-weight);*/
/*    text-align: left;*/
/*    margin-top: 10px;*/
/*    line-height: 23.4px;*/
/*}*/

/*.links {*/
/*    text-decoration: none;*/
/*    font-family: var(--font-name);*/
/*    font-size: var(--text-font-size);*/
/*    font-weight: var(--text-font-weight);*/
/*    text-shadow: 1px 1px 0 var(--links-accent-color);*/
/*}*/

/*.corner_decoration::before {*/
/*    position: absolute;*/
/*    content: '';*/
/*    width: 25px;*/
/*    height: 25px;*/
/*    border-top: 1px solid var(--main-color);*/
/*    border-right: 1px solid var(--main-color);*/
/*}*/

/*.corner_decoration::after {*/
/*    position: absolute;*/
/*    content: '';*/
/*    width: 25px;*/
/*    height: 25px;*/
/*    border-bottom: 1px solid var(--main-color);*/
/*    border-left: 1px solid var(--main-color);*/
/*}*/

/*.header.corner_decoration::before{*/
/*    top: 20px;*/
/*    right: 20px;*/
/*}*/

/*.header.corner_decoration::after{*/
/*    bottom: 22px;*/
/*    left: 20px;*/
/*}*/

/*.footer.corner_decoration::before{*/
/*    top:0;*/
/*}*/

/*.footer.corner_decoration::after{*/
/*    bottom: 0*/
/*}*/

/*.footer {*/
/*    position: relative;*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    height: 100vh;*/
/*    margin-bottom: 20px;*/
/*}*/

/*.footer_text {*/
/*    position: relative;*/
/*    !*display: flex;*!*/
/*    !*!*flex-direction: column;*!*!*/
/*    !*justify-content: center;*!*/
/*    !*align-items: center;*!*/
/*    !*height: 100vh;*!*/
/*    !*display: grid;*!*/
/*    !*justify-self: center;*!*/
/*    !*align-self:center;*!*/
/*    font-family: var(--font-name);*/
/*    font-size: clamp(7.5rem, 0.5625rem + 14.4531vw, 9.8125rem);*/
/*    font-weight: var(--header-font-weight);*/
/*    color: var(--main-header-color);*/
/*    text-shadow: 2px 2px 0 var(--accent-color);*/
/*    margin-top: 30px;*/
/*}*/
/*_____________________*/
/*    .rec {*/
/*        top: 10px;*/
/*        right: 24px;*/
/*    }*/

/*    .decorated-zone::before {*/
/*        top: 10px;*/
/*        right: 10px;*/
/*    }*/

/*    .decorated-zone::after {*/
/*        bottom: 10px;*/
/*        left: 10px;*/
/*    }*/

/*    .header__theme-menu {*/
/*        justify-content: flex-end;*/
/*        flex-direction: row;*/
/*    }*/

/*    .header__theme-menu-list {*/
/*        !*display: flex;*!*/
/*        flex-direction: column;*/
/*        align-items: flex-end;*/
/*        !*gap: 10px;*!*/
/*        margin-right: 10px;*/
/*        margin-top: 23px;*/
/*    }*/

/*    !*.header__theme-menu-button {*!*/
/*    !*    color: var(--main-color);*!*/
/*    !*    background-color: transparent;*!*/
/*    !*    width: 70px;*!*/
/*    !*    height: 26px;*!*/
/*    !*    text-transform: lowercase;*!*/
/*    !*    font-family: var(--font-name);*!*/
/*    !*    font-size: var(--text-font-size);*!*/
/*    !*    font-weight: var(--text-font-weight);*!*/
/*    !*    line-height: 18px;*!*/
/*    !*    text-align: center;*!*/
/*    !*    border: none;*!*/
/*    !*}*!*/

/*    .main_header {*/
/*        !*display: flex;*!*/
/*        !*flex-direction: row;*!*/
/*        !*align-items: center;*!*/
/*        !*justify-content: space-between;*!*/
/*        !*margin-top: 10px;*!*/
/*        !*margin-left: 7px;*!*/
/*        display: grid;*/
/*        justify-self: start;*/
/*        align-self:center;*/
/*        font-family: var(--font-name);*/
/*        font-size: clamp(7.5rem, 0.5625rem + 14.4531vw, 9.8125rem);*/
/*        font-weight: var(--header-font-weight);*/
/*        color: var(--main-header-color);*/
/*        text-shadow: 4px 4px 0 var(--accent-color);*/
/*        !*line-height: 95.7px;*!*/
/*    }*/

/*    .heading-text.title_decore {*/
/*        !*flex-direction: column;*!*/
/*        !*margin-top: 6.5vh;*!*/
/*        !*margin-right: 10px;*!*/
/*        !*height: 117px;*!*/
/*        display: grid;*/
/*        justify-self: end;*/
/*        align-self:center;*/
/*        margin-left: 10px;*/
/*        margin-right: 20px;*/
/*        font-family: var(--font-name);*/
/*        font-size: var(--sub-header-font-size);*/
/*        font-weight: var(--sub-header-font-weight);*/
/*    }*/

/*    main {*/
/*        display: flex;*/
/*        flex-direction: column;*/
/*        margin: 40px 10px 0 10px;*/
/*        gap: 50px;*/
/*    }*/

/*    .section {*/
/*        display: grid;*/
/*        grid-template-rows: auto;*/
/*        row-gap: 20px;*/
/*    }*/

/*    .section article {*/
/*        display: flex;*/
/*        flex-direction: column;*/
/*        grid-row: auto;*/
/*    }*/

/*    !*.what_multitasking {*!*/
/*    !*    margin-top: 4px;*!*/
/*    !*}*!*/

/*    !*.how_walk {*!*/
/*    !*    margin-top: 4px;*!*/
/*    !*}*!*/

/*    .section_galery div {*/
/*        display: grid;*/
/*        grid-template-rows: auto;*/
/*        row-gap: 10px;*/
/*        margin-top: -9px;*/
/*    }*/

/*    .section__image {*/
/*        width: 100%;*/
/*        height: 100%;*/
/*        grid-row: auto;*/
/*        object-fit: cover;*/
/*        object-position: center;*/
/*    }*/

/*    .footer {*/
/*        margin-top: 26px;*/
/*    }*/

/*    .footer::before {*/
/*        right: 10px;*/
/*        margin-top: 25px;*/
/*    }*/

/*    .footer::after {*/
/*        left: 10px;*/
/*    }*/
/*}*/

/*----------------------------------*/