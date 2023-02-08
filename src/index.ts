class User {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public email: string,
    public phone: string,
    public bootCampYear: number,
    public campus: 'MAD' | 'BCN' | 'MAL'
  ) {}
}

class TechnicalTest {
  constructor(
    public id: string,
    public studentId: string,
    public company: string,
    public uploadDate: Date,
    public role:
      | 'Frontend'
      | 'Backend'
      | 'Fullstack'
      | 'Mobile'
      | 'UX/UI'
      | 'DevOps'
  ) {}
}

console.log('Hello World');
