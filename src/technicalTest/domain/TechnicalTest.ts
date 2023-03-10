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
