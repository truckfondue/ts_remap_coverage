export class TestTarget {
    questions;
    time;
    constructor(n, t) {
      this.questions = n * 2;
      this.time = t;
    }
    proctorTheTest() {
      console.log(`today's test is ${this.questions} questions long with ${this.time} minutes`);
    }
}
