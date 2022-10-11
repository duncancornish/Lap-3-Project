import axios from 'axios'


export const storeQuestions = ( questions ) => ({
    type: 'STORE_QUESTIONS',
    payload: questions
})
export const storeAnswers = ( answers ) => ({
    type: 'STORE_ANSWERS',
    payload: answers
})
export const storeCorrectAnswers = ( answers ) => ({
    type: 'STORE_CORRECT_ANSWERS',
    payload: answers
})

export const fetchQuestions = async (e) => {
    try {
        e.preventDefault()
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${e.target.numberOfQuestions.value}&category=${e.target.category.value}&difficulty=${e.target.difficulty.value}&type=multiple`)
        console.log('this is data', data);
        return data.results
    } catch (error) {
        console.log('Error')
    }
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }