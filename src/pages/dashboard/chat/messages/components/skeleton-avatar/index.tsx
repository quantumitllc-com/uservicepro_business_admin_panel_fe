import React, { PropsWithChildren } from "react"
import ContentLoader from "react-content-loader"

const SkeletonAvatar = (props: PropsWithChildren) => {
	return (
		<ContentLoader
			speed={2}
			width={250}
			height={53}
			viewBox="0 0 250 53"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			{...props}
		>
			<rect x="91" y="57" rx="3" ry="3" width="120" height="8" />
			<rect x="73" y="25" rx="3" ry="3" width="62" height="7" />
			<circle cx="25" cy="28" r="24" />
			<circle cx="302" cy="60" r="9" />
			<rect x="512" y="24" rx="3" ry="3" width="33" height="11" />
			<rect x="282" y="31" rx="3" ry="3" width="33" height="14" />
		</ContentLoader>
	)
}

export default SkeletonAvatar