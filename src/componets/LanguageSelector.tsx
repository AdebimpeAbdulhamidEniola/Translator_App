const LanguageSelector =  () => {
    return(
        <div className="button-container flex flex-row gap-[10px]">
            <button className="rounded-3xl py-2 px-4 cursor-pointer hover:bg-[#212936cc]"> Detect Language</button>
            <button className="rounded-3xl py-2 px-4 cursor-pointer hover:bg-[#212936cc]">English</button>
            <button className="rounded-3xl py-2 px-4 cursor-pointer hover:bg-[#212936cc]">French</button>
        </div>
    )
}

export default  LanguageSelector;