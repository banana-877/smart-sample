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

  export function all() {
    return [
      {label: label(GenderType.NonAnswered), value: GenderType.NonAnswered},
      {label: label(GenderType.Female), value: GenderType.Female},
      {label: label(GenderType.Male), value: GenderType.Male},
    ]
  }

  export function from(genderType: string) {
    switch (Number.parseInt(genderType)) {
      case 1:
        return GenderType.Female
      case 2:
        return GenderType.Male
      default:
        return GenderType.NonAnswered
    }
  }
}

export default GenderType;
