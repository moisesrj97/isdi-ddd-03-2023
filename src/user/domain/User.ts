export type Campus = 'MAD' | 'BCN' | 'MAL';

export default class User {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public email: string,
    public phone: string,
    public bootCampYear: string,
    public campus: Campus
  ) {}
}
