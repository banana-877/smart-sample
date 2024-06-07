"use client"
import {useState} from "react";

export default function HeaderMenu () {
  const aClassName = `h-full flex items-center px-5 justify-center bg-no-repeat hover:border-b-4
                      hover:border-blue1 hover:border-solid border-b-4 border-transparent border-solid`
  const mainMenuClassName = "bg-blue3 h-9 col-span-1"
  const subMenuClassName = "absolute w-full"
  const ulClassName = "bg-blue3 mt-1 py-3 px-5 min-w-fit m-auto whitespace-nowrap"

  const menus = [
    { id: 1, name: "メニュー1", href: "/" },
    { id: 2, name: "メニュー2", href: "", subMenus: [
      { id: '2-1', name: "メニュー2-1", href: "" },
      { id: '2-2', name: "メニュー2-2", href: "" },
    ]},
    { id: 3, name: "メニュー3", href: "", subMenus: [
      { id: '3-1', name: "メニュー3-1", href: "" },
      { id: '3-2', name: "メニュー3-2", href: "" },
    ]},
    { id: 4, name: "メニュー4", href: "", subMenus: [
      { id: '4-1', name: "メニュー4-1", href: "" },
      { id: '4-2', name: "メニュー4-2", href: "" },
    ]},
    { id: 5, name: "メニュー5", href: "", subMenus: [
      { id: '5-1', name: "メニュー5-1", href: "" },
      { id: '5-2', name: "メニュー5-2", href: "" },
    ]},
  ]

  const renderMenus = menus.map((menu) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ isShowSubMenu, setIsShowSubMenu ] = useState('hidden')
    return (
      <div key={menu.id} className="relative">
        <div className={mainMenuClassName}>
          <a
            className={`${aClassName}`}
            href={menu.subMenus ? '#' : menu.href}
            onMouseEnter={() => setIsShowSubMenu('')}
            onMouseLeave={() => setIsShowSubMenu('hidden')}
          >
            {menu.name}
          </a>
        </div>

        {/* サブメニュー(アコーディオン表示) */}
        <div
          className={`${subMenuClassName} ${isShowSubMenu}`}
          onMouseEnter={() => setIsShowSubMenu('')}
          onMouseLeave={() => setIsShowSubMenu('hidden')}
        >
          { menu.subMenus &&
            <ul className={ulClassName}>
              { menu.subMenus?.map((subMenu) => {
                return (
                  <li key={subMenu.id} className="mb-1 hover:font-semibold">
                    <a
                      href={subMenu.href}
                    >
                      {subMenu.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          }
        </div>
      </div>
    )
  })

  return (
    <div id="header_menu" className="z-10 h-full w-full absolute pointer-events-none">
      <div className="bg-blue3 relative h-16 pointer-events-auto">
        <span className="absolute right-36 h-full flex items-center">テスト太郎</span>
      </div>
      <div className="sticky top-0 pointer-events-auto bg-blue3">
        <div className="flex justify-center">
          <div className="grid grid-cols-5" style={{ width: '1000px' }}>
            {renderMenus}
          </div>
        </div>
      </div>
    </div>
  )
}
