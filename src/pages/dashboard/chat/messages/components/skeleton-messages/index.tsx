import React, { PropsWithChildren } from "react"
import ContentLoader from "react-content-loader"

const SkeletonMessages = (props: PropsWithChildren) => {
	return (
		<ContentLoader
			speed={2}
			width={500}
			height={400}
			viewBox="0 0 500 400"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			{...props}
		>
			<rect x="4" y="4" rx="21" ry="21" width="437" height="112" />
			<rect x="11" y="139" rx="21" ry="21" width="211" height="73" />
			<rect x="13" y="239" rx="21" ry="21" width="449" height="73" />
			<rect x="22" y="338" rx="21" ry="21" width="437" height="142" />
		</ContentLoader>
	)
}

export default SkeletonMessages
