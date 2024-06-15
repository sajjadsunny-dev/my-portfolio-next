import React, { FC } from 'react'

interface IProps {
  title?: string,
  sub_title?: string
}

const CompTitle: FC<IProps> = ({ title, sub_title }) => {
  return (
    <>
      <div className="relative mb-12">
          <h3 className="text-130 font-bold text-secondary-100 text-center uppercase select-none">{title}</h3>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
            <h4 className="font-semibold text-4xl text-center capitalize select-none relative after:content-[''] after:absolute after:w-20 after:h-3px after:bg-primary after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:translate-y-2">{sub_title}</h4>
          </div>
        </div>
    </>
  )
}

export default CompTitle