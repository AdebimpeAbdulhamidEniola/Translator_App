import { createContext } from "react";
import type { LanguagesType } from "../languages";

type LanguageContextType = {
    selectedLanguage: LanguagesType | null,
    setSelectedLanguage:  React.Dispatch<React.SetStateAction<LanguagesType | null>>
    isDropDownOpen: boolean,
    setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const LanguageContext = createContext<LanguageContextType | null>(null)