



export class Question {
    constructor(data) {
        this.question = data.question
        this.difficulty = data.difficulty
        this.category = data.category
        this.type = data.type
        this.answer = data.correct_answer
        this.wrong = data.incorrect_answers
    }

    get QuestionCard() {
        return /*html*/`
        <div class="col-6">
          <div class="card">
            ${this.question}
            <div class="row pt-5">
                <div class="col-3">
                    <div class="card">
                        ${this.answer}
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        ${this.wrong[1]}
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        ${this.wrong[2]}
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        ${this.wrong[0]}
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        `
    }

    // get AnswerCard() {
    //     return /*html*/`
    //         <div class="col-3">
    //             <div class="card">
    //                 Answer 1
    //             </div>
    //         </div>
    //         <div class="col-3">
    //             <div class="card">
    //                 Answer 2
    //             </div>
    //         </div>
    //         <div class="col-3">
    //             <div class="card">
    //                 Answer 3
    //             </div>
    //         </div>
    //         <div class="col-3">
    //             <div class="card">
    //                 Answer 4
    //             </div>
    //         </div>
    //     `
    // }
}