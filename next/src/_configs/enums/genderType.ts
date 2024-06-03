enum GenderType {
  /** 回答なし */
  NonAnswered  = 0,
  /** 女性 */
  Female = 1,
  /** 男性 */
  Male = 2,
}

namespace GenderType {
  export function label(sortType: GenderType) {
    switch (sortType) {
      case GenderType.NonAnswered:
        return '回答なし'
      case GenderType.Female:
        return '女性'
      case GenderType.Male:
        return '男性'
      }
  };
}

export default GenderType;
