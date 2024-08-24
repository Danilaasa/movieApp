import { MoviesCards } from "./store/types";
import { words } from "./types";


export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const SCREEN_MD = 576;

export const beautifyDuration = (value: number, words: words) => {
        value = Math.abs(value) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
}

export const beautifyDeclination = (value: string) => {
        if (value) {
                if (value.includes(",")) {
                        return "Страны:"
                } else {
                        return "Страна:"
                }
        }
        
}

export const getTagsArray = (value: string):string[] => {
        if (value) { 
                return value.split(",")
        } else {
                return [""]
        }
        
}

export const filterText = (searchText: string, listMovies: MoviesCards[]) => {
        if (!searchText) {
                return listMovies
        }
        return listMovies.filter((movie: MoviesCards) => movie.Title.toLowerCase().includes(searchText.toLowerCase()))

}    

export const themeSwitcher = (theme: "light" | "dark") => {
        document.documentElement.setAttribute("theme", theme)
}       


export const ValidateForm = (value: string | null): boolean => {
        if (value === null) {
                return false
        }
        if (!value.length || value.length === 0) {
                return false
        }
        if (EMAIL_REGEXP.test(value)) {
                return true
        } else {
                return false
        }
}
