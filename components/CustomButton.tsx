import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";
const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textvariant = "default",
  IconRight,
  className,
  IconLeft,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
    >
      {IconLeft && <IconRight />}
      <Text>{title}</Text>
      {IconLeft && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
