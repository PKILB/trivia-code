import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { hp_api } from "./AxiosService.js";



class QuestionsService {


    async getQuestions() {
        const res = await hp_api.get('https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple')
        console.log('what the heck is the ', res.data);
        const questionsIWant = res.data.results.map(q => new Question(q))
        appState.questions = questionsIWant
    }
}

export const questionsService = new QuestionsService()