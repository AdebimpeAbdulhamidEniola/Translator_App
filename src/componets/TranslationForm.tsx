import LanguageSelector from "./LanguageSelector";

const TranslationForm = () => {
    return(
        <div className="textarea-container">
            {/* <!-- Language selection section --> */}
            <LanguageSelector />

            {/* <!-- Text input area --> */}
            <div className="text-input-section">
                <textarea className="text-input" placeholder="Hello, how are you?"></textarea>
                <div className="character-counter">19/500</div>
            </div>

            {/* <!-- Translate button --> */}
            <div className="action-section">
                <button className="translate-button">Translate</button>
            </div>
            
        </div>
    )

}

export default TranslationForm;