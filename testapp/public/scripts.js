const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 10,
            questions: [
                {
                    question: "The first case of novel coronavirus was identified in?",
                    answers: {a: 'Beijing', b: 'Shangai', c: 'Wuhan, Hubei', d: 'Tianjin'},
                    correctAnswer: 'c'
                },
                {
                    question: "Who was first woman to win Nobel Prize?",
                    answers: {a: 'Marie Curie', b: 'Selma Lagerlof', c: 'Pearl S. Buck', d: 'Gabriela Mistral'},
                    correctAnswer: 'a'
                },
                {
                    question: "Demolition of the Berlin wall separating East and West Germany began in what year?",
                    answers: {a: '1990', b: '1988', c: '1989', d: '1991'},
                    correctAnswer: 'c'
                },
                {
                    question: "What was the first soft drink in space?",
                    answers: {a: 'Pepsi', b: 'Coca-Cola', c: 'Sprite', d: 'Thumbs up'},
                    correctAnswer: 'b'
                },
                {
                    question: "From which country does Gouda cheese originate?",
                    answers: {a: 'Philippines', b: 'Netherlands', c: 'Finland', d: 'Iceland'},
                    correctAnswer: 'b'
                },
                {
                    question: "What is the most consumed manufactured drink in the world?",
                    answers: {a: 'Tea', b: 'Coffee', c: 'Soft drinks', d: 'Alcohol'},
                    correctAnswer: 'a'
                },
                {
                    question: "Bleaching powder is used in drinking water as a/an-",
                    answers: {a: 'Coagulant', b: 'Disinfectant', c: 'Anticeptic', d: 'Antibiotic'},
                    correctAnswer: 'b'
                },
                {
                    question: "What is the ratio of RBC to WBC?",
                    answers: {a: '1:6000', b: '600:1', c: '1:900', d: '500:1'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which disease is caused by the bite of a mad dog?",
                    answers: {a: 'Lukoderma', b: 'Hydrophobia', c: 'Hypertension', d: 'Arthritis'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which of the following diseases are related to corona virus?",
                    answers: {a: 'MERS', b: 'SARS', c: 'Both A and B', d: 'None'},
                    correctAnswer: 'c'
                },
                
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')