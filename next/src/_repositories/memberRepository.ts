import commonRepository from '@/_repositories/commonRepository';
import { ResponseWithPagination } from '@/_types/response'
import { filterEmptyStringValues } from '@/_utils/dataUtils';
import { MemberParams } from '@/_types/params/member';

export default {
  async getMembers(searchParams: MemberParams): Promise<ResponseWithPagination> {
    const params = filterEmptyStringValues(searchParams);
    // TODO: API実装後に繋ぎ込みを行う
    // return (await commonRepository.get('/members', params)).data;
    return {
      status_code: 200,
      data: {
        current_page: 1,
        data: [
          {"id": 1, "name": "田中一郎", "gender": 0, "birthday": "1994-04-01"},
          {"id": 2, "name": "田中二郎", "gender": 0, "birthday": "1994-04-01"},
          {"id": 3, "name": "田中三郎", "gender": 0, "birthday": "1994-04-01"},
          {"id": 4, "name": "田中四郎", "gender": 0, "birthday": "1994-04-01"},
          {"id": 5, "name": "田中五郎", "gender": 2, "birthday": "1994-04-01"},
          {"id": 6, "name": "田中六郎", "gender": 2, "birthday": "1994-04-01"},
          {"id": 7, "name": "田中七郎", "gender": 2, "birthday": "1994-04-01"},
          {"id": 8, "name": "田中八郎", "gender": 2, "birthday": "1994-04-01"},
          {"id": 9, "name": "田中九郎", "gender": 2, "birthday": "1994-04-01"},
          {"id": 10, "name": "田中花子", "gender": 1, "birthday": "1994-12-01"},
        ],
        from: 1,
        last_page: 3,
        per_page: 10,
        to: 10,
        total: 30
      }
    }
  },
};
