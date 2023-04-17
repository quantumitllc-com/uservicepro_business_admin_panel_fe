import React, { PropsWithChildren } from "react"
import ContentLoader from "react-content-loader"

const SkeletonMessages = (props: PropsWithChildren) => {
	return (
		<ContentLoader
			speed={2}
			width={500}
			height={500}
			viewBox="0 0 500 500"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			{...props}
		>
			<rect x="4" y="4" rx="21" ry="21" width="437" height="112" />
			<rect x="5" y="139" rx="21" ry="21" width="211" height="73" />
			<rect x="5" y="240" rx="21" ry="21" width="449" height="73" />
			<rect x="4" y="338" rx="21" ry="21" width="437" height="142" />
		</ContentLoader>
	)
}

export default SkeletonMessages
