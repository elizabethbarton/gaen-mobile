import { ViewStyle } from "react-native"

export const xxxSmall = 14
export const xxSmall = 18
export const xSmall = 24
export const small = 30
export const medium = 60
export const large = 85

const baseIcon: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

export const xSmallIcon: ViewStyle = {
  ...baseIcon,
  height: xSmall,
  width: xSmall,
}

export const smallIcon: ViewStyle = {
  ...baseIcon,
  height: small,
  width: small,
}

export const largeIcon: ViewStyle = {
  ...baseIcon,
  height: large,
  width: large,
}
