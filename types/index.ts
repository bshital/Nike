import { StaticImageData } from "next/image"

export interface ButtonProps {
  label: string,
  iconURL?: string,
  backgroundColor?: string,
  textColor?: string,
  borderColor?: string,
  fullWidth?: boolean
}

export interface ReviewCardProps {
  imgURL: string,
  customerName: string,
  rating: number,
  feedback?: string
}

export interface PopularProductCardProps {
  imgURL: string,
  name: string,
  price: string
}

export interface ServiceCardProps {
  imgURL: string,
  label: string,
  subtext?: string
}

interface ShoeImgURL {
  thumbnail: string,
  bigShoe: string
}
export interface ShoeCardProps {
  index?: number,
  imgURL: ShoeImgURL,
  bigShoeImg: string,
  changeBigShoeImage: (bigShoeImg: string) => void;
}