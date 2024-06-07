import {NextRequest} from "next/server";
import {SearchMembersParams} from "@/_types/params/searchMembersParams";
import createMemberValidator from "@/_validator/members/createMemberValidator";
import memberRepository, {NewMember} from "@/_repositories/model/memberRepository";

export async function GET(
  request: NextRequest,
  { searchParams }: { searchParams: SearchMembersParams }
) {
  /////////////////////////////////////////////////////////
  // MESから取得
  // const members = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  //

  /////////////////////////////////////////////////////////
  // DBから取得
  // const members = await db.item.findUnique({ id })
  //

  return Response.json({})
}

export async function POST (request: NextRequest) {
  const params = await request.json()

  const member = await memberRepository.insert({
    name: params.name,
    email: params.email,
    tel: params.tel,
    birthday: new Date(params.birthday).toDateString(),
    gender: params.gender,
    note: params.note
  } as NewMember)

  return Response.json(member)
}