export class TestTarget {
    questions: number
    constructor(n: number) {
      this.questions = n * 2
    }
    proctorTheTest() {
      console.log(`today's test is ${this.questions} questions long`)
    }
}
