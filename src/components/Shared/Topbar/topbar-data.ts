export const getLanguages = () => {
  return [
    { id: 1, name: 'Eng', default: true },
    { id: 2, name: 'বাংলা', default: false }
  ]
}

export const getCurrencies = () => {
  return [
    { id: 1, name: 'USD', default: true },
    { id: 2, name: 'TAKA', default: false }
  ]
}

// export const setLanguage = (id: any) => {
//   languages.find((language) => language.id === id).default = true
//   languages.filter((language) => language.id !== id).map((language) => (language.default = false))
//   console.log(languages)
// }

// export const getLanguages = {
//   selectedLanguage: 'eng',
//   languages: ['Eng', 'বাংলা']
// }
