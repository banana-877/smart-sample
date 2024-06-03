"use client"
import { Button } from "@/_components/FormParts/Button";
import InputTextField from "@/_components/FormParts/InputTextField";
import InputDatepickerRangeField from "@/_components/FormParts/InputDatePickerRangeField";
import { GetUrlParameter } from "@/_utils/queryUtils";
import { useState, useEffect } from "react";
import { MemberParams } from "@/_types/params/member";
import { Member } from "@/_types/models/member";
import PaginationLinks, { PaginationProps } from "@/_components/LayoutParts/PaginationLinks";
import membersRepository from '@/_repositories/memberRepository';
import GenderType from '@/_configs/enums/genderType';

export default function Index() {
  useEffect(() => {
    getMembers();
  }, []);

  const [members, setMembers] = useState<Member[]>();
  const [params, setParams] = useState<MemberParams>({
    name: GetUrlParameter('name'),
    gender: GetUrlParameter('gender'),
    email: GetUrlParameter('email'),
    tel: GetUrlParameter('tel'),
    birthday_start: GetUrlParameter('birthday_start'),
    birthday_end	: GetUrlParameter('birthday_end'),
    page: GetUrlParameter('page'),
  });
  const [pagination, setPagenation] = useState<PaginationProps>({last_page: 1, total: 0});

  /**
   * 会員一覧取得
   */
  const getMembers = async () => {
    const response = await membersRepository.getMembers(params);
    setMembers(response.data.data);
    setPagenation(response.data);
  };

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => ({ ...prev, [event.target.name]: event.target.value }) as MemberParams);
  };

  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl mt-8">会員情報</h1>
        <div className="flex justify-center">
          <Button
            label="新規登録"
            color="blue"
            className="h-16"
            onClick={() => ""}
          />
        </div>
        <div className="w-full bg-blue4 mt-6 py-6">
          <div className="flex flex-wrap">
            <div className="flex flex-1 items-center px-5">
              <InputTextField
                fieldName="会員名"
                id="name"
                name="name"
                className="flex-1"
                value={params.name}
                placeholder="入力してください"
                autoComplete=""
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <div className="flex flex-1 items-center px-5">
              <InputTextField
                fieldName="性別"
                id="gender"
                name="gender"
                className="flex-1"
                value={params.gender}
                placeholder="入力してください"
                autoComplete=""
                onChange={(e) => onChangeForm(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="flex flex-1 items-center px-5">
              <InputTextField
                fieldName="メールアドレス"
                id="email"
                name="email"
                className="flex-1"
                value={params.email}
                placeholder="入力してください"
                autoComplete=""
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <div className="flex flex-1 items-center px-5">
              <InputTextField
                fieldName="電話番号"
                id="tel"
                name="tel"
                className="flex-1"
                value={params.tel}
                placeholder="入力してください"
                autoComplete=""
                onChange={(e) => onChangeForm(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="flex flex-1 items-center px-5">
              <InputDatepickerRangeField
                dateFormat="yyyyMMdd"
                fieldName="生年月日"
                fieldClassName="mr-4"
                fromFieldName="birthday_start"
                fromPlaceholder="20230101"
                fromSelected={params.birthday_start}
                onFromChange={(date) => setParams((prevSearchParams) => ({...prevSearchParams, birthday_start: date }))}
                toFieldName="birthday_end"
                toPlaceholder="20230101"
                toSelected={params.birthday_end}
                onToChange={(date) => setParams((prevSearchParams) => ({...prevSearchParams, birthday_end: date }))}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              label="検索する"
              color="blue"
              onClick={() => ""}
            />
          </div>
        </div>
        <div className="min-h-[500px]">
          <table className="table-auto w-full text-left mt-10">
            <thead className="border-b-2 bd-blue1">
              <tr>
                <th className="w-[30%]">会員名</th>
                <th className="w-[30%]">性別</th>
                <th className="w-[30%]">生年月日</th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {members?.map((member, index) => {
                const classRowColor = ((index+1) % 2 === 0) ? "bg-blue5" : "bg-white1";
                return(
                  <tr key={member.id} className={classRowColor}>
                    <td className='py-1.5 px-4'>{member.name}</td>
                    <td className='py-1.5 px-4'>{GenderType.label(member.gender)}</td>
                    <td className='py-1.5 px-4'>{member.birthday.toLocaleString()}</td>
                    <td className='py-1.5 px-4'>
                      <Button
                        label="詳細"
                        color="blue"
                        size="S"
                        onClick={() => ""}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <PaginationLinks pagination={pagination} params={params}/>
        </div>
      </div>
    </>
  );
}
