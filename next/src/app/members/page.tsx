import memberRepository from "@/_repositories/memberRepository";
import View from "@/app/members/view";
import {Member} from "@/_types/models/member";
import {SearchMembersParams} from "@/_types/params/searchMembersParams";

export default async function Page(
  { searchParams }: { searchParams: SearchMembersParams }
) {
  //////////////////////////
  // server処理
  //

  const res = await memberRepository.getMembers(searchParams)

  const members: Member[] = res.data.data

  return (
    <>
      <View
        defaultMembers={members}
        searchParams={searchParams}
        pagination={{last_page: res.data.last_page, total: res.data.total}}
      />
    </>
  );
}
