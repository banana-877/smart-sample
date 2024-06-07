import db from "@/_plugins/db";
import {members} from "../../../database/migrations/schema";
import commonRepository from "@/_repositories/commonRepository";
import {SearchMembersParams} from "@/_types/params/searchMembersParams";
import {isEmpty, notPartialMatch} from "@/_utils/stringUtils";
import 'server-only'

export type NewMember = typeof members.$inferInsert

export default {
  /**
   * 会員データを全件取得する
   */
  async getAll() {
    return db.query.members.findMany()
  },

  /**
   * 会員ページングデータを取得
   */
  async search(searchParams: SearchMembersParams) {
    const members = (await this.getAll())
      .map((member) => {
        return {
          name: member.name,
          gender: member.gender,
          email: member.email,
          birthday: new Date(member.birthday),
        }
      })
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

    return {data: commonRepository.pagination(members)}
  },

  /**
   * 会員データを登録する
   * @param member
   */
  async insert(member: NewMember) {
    return db.insert(members).values(member).returning()
  }
}