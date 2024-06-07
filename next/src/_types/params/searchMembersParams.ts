export interface SearchMembersParams extends Record<string, any>{
  name: string;
  gender: string;
  email: string;
  tel: string;
  birthday_start: string;
  birthday_end: string;
  page: string;
}
