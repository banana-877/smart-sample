import {NextRequest} from "next/server";
import {SearchMembersParams} from "@/_types/params/searchMembersParams";

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