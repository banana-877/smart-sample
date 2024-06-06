'use client'

import {Button} from "@/_components/FormParts/Button";
import InputTextField from "@/_components/FormParts/InputTextField";
import React, {useState} from "react";
import {Member} from "@/_types/models/member";
import GenderType from '@/_configs/enums/genderType';
import {redirect, useRouter} from "next/navigation";
import InputError from "@/_components/FormParts/InputError";
import {InputRadioField} from "@/_components/FormParts/InputRadioField";
import TextAreaField from "@/_components/FormParts/TextAreaField";
import memberRepository from "@/_repositories/memberRepository";
import createMemberValidator from "@/_validator/members/createMemberValidator";
import InputDatePickerField from "@/_components/FormParts/InputDatePickerField";

export default function View() {

  //////////////////////////
  // front処理
  //

  const [member, setMember] = useState<Member>(
    {name: '', gender: GenderType.NonAnswered, email: '', tel: '', note: ''} as Member
  )

  const [errors, setErrors] = useState<Record<string, string[]>>()

  const router = useRouter()

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }) as Member);
  };

  const submitForm = async () => {
    const valid = createMemberValidator.safeParse(member)
    if (!valid.success) {
      setErrors(valid.error.formErrors.fieldErrors)
      return
    }

    const res = await memberRepository.postMember(member)
    if (res.ok) {
      alert('登録しました。')
      router.push('/members')
    } else {
      console.error(res)
      alert('登録できませんでした。')
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="[&_label]:flex [&_label]:justify-end [&_label]:items-center">
          <h1 className="text-2xl my-8">会員情報 登録</h1>
          {/* 会員名 */}
          <div className="flex p-2 bg-blue5">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <InputTextField
                  fieldName="会員名"
                  id="name"
                  name="name"
                  fieldClassName='w-32'
                  className="w-96"
                  value={member.name}
                  placeholder="入力してください"
                  autoComplete="name"
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <InputError
                message={errors?.name || ''}
                className="mt-2 ml-[8.5em]"
              />
            </div>
          </div>
          {/* 性別 */}
          <div className="flex p-2">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <InputRadioField
                  fieldName="性別"
                  id="gender"
                  name="gender"
                  fieldClassName='w-32 pr-4'
                  className="w-32"
                  options={GenderType.all().map((gender) => ({label: gender.label, value: gender.value.toString()}))}
                  value={member.gender}
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <InputError
                message={errors?.gender || ''}
                className="mt-2 ml-[8.5em]"
              />
            </div>
          </div>
          {/* 誕生日 */}
          <div className="flex p-2 bg-blue5">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <InputDatePickerField
                  fieldName="誕生日"
                  name="birthday"
                  fieldClassName='w-32'
                  className="py-2 px-3 w-64 shadow-sm border"
                  selected={member.birthday?.toDateString()}
                  placeholder="1994-01-01"
                  onChange={(e) => setMember((prev) => ({ ...prev, birthday: new Date(e) }) as Member)}
                />
              </div>
              <InputError
                message={errors?.email || ''}
                className="mt-2 ml-[8.5em]"
              />
            </div>
          </div>
          {/* メールアドレス */}
          <div className="flex p-2 bg-blue5">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <InputTextField
                  fieldName="メールアドレス"
                  id="email"
                  name="email"
                  fieldClassName='w-32'
                  className="w-64"
                  value={member.email}
                  placeholder="入力してください"
                  autoComplete="email"
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <InputError
                message={errors?.email || ''}
                className="mt-2 ml-[8.5em]"
              />
            </div>
          </div>
          {/* 電話番号 */}
          <div className="flex p-2">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <InputTextField
                  fieldName="電話番号"
                  id="tel"
                  name="tel"
                  fieldClassName='w-32'
                  className="w-64"
                  value={member.tel}
                  placeholder="入力してください"
                  autoComplete="tel"
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <InputError
                message={errors?.email || ''}
                className="mt-2 ml-[8.5em]"
              />
            </div>
          </div>
          {/* 備考 */}
          <div className="flex p-2 bg-blue5">
            <div className="flex-col flex-1">
              <div className="flex flex-1">
                <TextAreaField
                  fieldName="備考"
                  id="note"
                  name="note"
                  fieldClassName='w-32 pr-4'
                  className="py-2 px-3 w-full"
                  value={member.note || ''}
                  placeholder="(任意項目)入力してください"
                  autoComplete="note"
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <InputError
                message={errors?.note || ''}
                className="mt-2 ml-[8.5em]"/>
            </div>
          </div>
          <div className="flex justify-center mt-8 mb-16">
            <div>
              <Button label="戻る" color='gray' onClick={() => router.push('/members')}/>
            </div>
            <div className="ml-8">
              <Button label="登録する" color='blue' onClick={() => submitForm()}/>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
