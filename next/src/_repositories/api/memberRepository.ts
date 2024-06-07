import { PageResponse } from '@/_types/response'
import { SearchMembersParams } from '@/_types/params/searchMembersParams';
import {isEmpty, notPartialMatch} from "@/_utils/stringUtils";
import {addDay} from "@formkit/tempo";
import {Member} from "@/_types/models/member";
import commonRepository from "@/_repositories/commonRepository";

export default {
  /**
   * 会員一覧情報を取得する
   * @param searchParams
   * @return Promise<Respon
   */
  async getMembers(searchParams: SearchMembersParams): Promise<PageResponse> {
    'use server'

    /////////////////////////////////////////////////////////
    // MESから取得
    // const members = await fetch('https://mes.com/...', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    //

    /////////////////////////////////////////////////////////
    // FastAPI や NextAPIから取得も可
    // const members = (await fetch('/api/members', params)).json();
    //

    const members = [...Array(100)]
      .map((_, i) => ({
        "id": i,
        "name": `田中${i}一郎`,
        "gender": i % 3,
        "email": `member${i}@sample.com`,
        "tel": `0901111222${i}`,
        "birthday": addDay("1994-04-01", i / 2)
      }))
      .filter((member) => {
        if (!isEmpty(searchParams.name) && notPartialMatch(member.name, searchParams.name)) {
          // 会員名部分一致検索
          return false
        }

        if (searchParams.gender && !searchParams.gender.split(',').includes(member.gender.toString())) {
          // 性別検索
          return false
        }

        if (!isEmpty(searchParams.email) && notPartialMatch(member.email, searchParams.email)) {
          // メールアドレス部分一致検索
          return false
        }

        if (!isEmpty(searchParams.tel) && notPartialMatch(member.tel, searchParams.tel)) {
          // 電話番号部分一致検索
          return false
        }

        if (!isEmpty(searchParams.birthday_start) && member.birthday.getTime() < (new Date(searchParams.birthday_start)).getTime()) {
          // 誕生日範囲検索
          return false
        }

        if (!isEmpty(searchParams.birthday_end) && member.birthday.getTime() > (new Date(searchParams.birthday_end)).getTime()) {
          // 誕生日範囲検索
          return false
        }

        return true
      })

    return {
      status_code: 200,
      data: commonRepository.pagination(members)
    }
  },

  async postMember(member: Member)  {
    return fetch('/api/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member),
    })
  }
};
