import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import {questionsService} from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"

function _drawQuestions() {
    let template = ''
    appState.questions.forEach(q => template += q.QuestionCard)
    setHTML('questions', template)
}



export class QuestionsController {
    constructor(){
        console.log('i work')
        appState.on('questions', _drawQuestions)
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }


}