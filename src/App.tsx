import {useState} from 'react'
import TranslationApp from "./componets/TranslationApp"
import TranslationForm from "./componets/TranslationForm"
import { LanguageContext } from './context/LanguageContext'
import type { LanguagesType } from './languages'

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagesType | null>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  
  return(
    <div className="bg-[url(/resources/hero_img.jpg)] min-h-screen bg-cover bg-center bg-no-repeat">
    
      <div className="flex justify-center items-center min-h-screen">
        <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage, isDropDownOpen, setIsDropDownOpen}}>

          <div className="flex gap-8"> 
            <TranslationForm />
            <TranslationApp />
          </div>
          
        </LanguageContext.Provider>
      </div>
    </div>
  )
}

export default App;