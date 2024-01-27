export interface ISliderData {
  id: number
  heading: string
  content: string
  btn: string | boolean
}

export interface ISliderOptions {
  type: string
  autoplay: boolean
  speed: number
  interval: number
  perPage: number
  gap: string
  easing: string
  arrows: boolean
  autoHeight: boolean
}

export const sliderData: ISliderData[] = [
  {
    id: 1,
    heading: 'Fresh & Healthy Organic Food',
    content: 'Sale Up to 48% off',
    btn: 'shop now'
  },
  {
    id: 2,
    heading: 'Fresh & Healthy Organic Food',
    content: 'Sale Up to 28% off',
    btn: 'shop now'
  },
  {
    id: 3,
    heading: 'Fresh & Healthy Organic Food',
    content: 'Sale Up to 98% off',
    btn: 'shop now'
  }
]

export const sliderOptions: ISliderOptions = {
  type: 'loop',
  autoplay: true,
  speed: 800,
  interval: 2500,
  perPage: 1,
  gap: '0px',
  easing: 'ease',
  arrows: false,
  autoHeight: true
}
