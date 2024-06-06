import View from "@/app/members/create/view";
import {SearchMembersParams} from "@/_types/params/searchMembersParams";

export default async function Page(
  { searchParams }: { searchParams: SearchMembersParams }
) {
  //////////////////////////
  // server処理
  //

  return (
    <>
      <View/>
    </>
  );
}
