import React from 'react'
import Image from 'next/image'
import Typography from '../ui/typography'

type FeatureCardProps = {
  data: {
    icon: string;
    alter: string;
    title: string;
    description: string;
  }[];
}
const FiveCardsComponent: React.FC<FeatureCardProps> = ({ data }) => {
  return (
    <div className="flex md:grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap items-center justify-left  justify-between gap-x-[58px] gap-y-10 md:gap-y-[98px] mt-[72px]">
      {data.map((item, index) => (
        <div key={index} className="md:max-w-[361px] flex flex-col gap-[13px]">
          <Image src={item.icon} alt={item.alter} width={32} height={32} />
          <Typography variant="h4">
            {item.title}
          </Typography>
          <Typography variant="subp">{item.description}</Typography>
        </div>
      ))}
    </div>
  )
}

export default FiveCardsComponent